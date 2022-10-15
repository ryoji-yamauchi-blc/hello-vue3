import { useMutation } from "@tanstack/vue-query";
import { authRepository } from "@/repositories";

// WIP
export const useAuth = () => {
  const mutation = useMutation(authRepository.login);
  return {
    login: mutation.mutate,
  };
};
