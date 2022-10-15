import { useMutation } from "@tanstack/vue-query";
import { authRepository } from "@/repositories";

export const useAuth = () => {
  const mutation = useMutation(authRepository.login);
  return {
    login: mutation.mutate,
  };
};
