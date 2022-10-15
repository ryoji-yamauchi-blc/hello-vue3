import { useMutation, useQueryClient, useQuery } from "@tanstack/vue-query";
import type { User } from "@/models";
import { userRepository } from "@/repositories";

export const useUser = (id?: User["id"]) => {
  const queryClient = useQueryClient();
  const query = useQuery(
    ["user", id],
    () => userRepository.get(id as User["id"]),
    {
      enabled: !!id,
    }
  );

  const postMutation = useMutation(userRepository.post, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  const putMutation = useMutation(userRepository.put, {
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
  });

  return {
    data: query.data,
    post: postMutation.mutate,
    put: putMutation.mutate,
  };
};
