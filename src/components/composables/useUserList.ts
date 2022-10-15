import { useQuery } from "@tanstack/vue-query";
import { userRepository } from "@/repositories";

export const useUserList = () => {
  const query = useQuery(["users"], userRepository.gets, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });
  return query;
};
