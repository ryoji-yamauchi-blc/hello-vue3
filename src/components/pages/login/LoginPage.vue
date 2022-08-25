<script lang="ts" setup>
import type { LoginFormValues } from "@/models";
import { useRouter } from "vue-router";
import { authRepository } from "@/repositories";
import { useAuthStore } from "@/stores";
import { MainTemplate } from "@/components/templates";
import LoginForm from "./LoginForm.vue";

const store = useAuthStore();
const router = useRouter();

const handleSubmit = async (formValues: LoginFormValues) => {
  try {
    const auth = await authRepository.login(formValues);
    store.login(auth);
    router.push("/users");
  } catch (error) {
    // TODO エラーハンドリング
    console.error(error);
  }
};
</script>

<template>
  <MainTemplate :show-header="false">
    <div class="page-inner">
      <LoginForm class="form" @submit="handleSubmit" />
    </div>
  </MainTemplate>
</template>

<style lang="scss" scoped>
.page-inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  width: 400px;
}
</style>
