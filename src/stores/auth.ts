import { defineStore } from "pinia";
import type { Auth } from "@/models";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      isLogin: false,
      id: "",
      name: "",
      role: "",
    };
  },
  actions: {
    login(auth: Auth) {
      this.isLogin = true;
      this.id = auth.id;
      this.name = auth.name;
      this.role = auth.role;
    },
  },
});
