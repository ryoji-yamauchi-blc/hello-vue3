<script setup lang="ts">
import { useRouter } from "vue-router";
import type { UserFormValues } from "@/models";
import { PAGE_URL } from "@/enums";
import { useUser } from "@/components/composables";
import { MainTemplate } from "@/components/templates";
import UserForm from "./UserForm.vue";

const router = useRouter();
const { post } = useUser();

const handlePrev = () => {
  router.push(PAGE_URL.USER_LIST);
};

const handleSubmit = async (formValues: UserFormValues) => {
  post(formValues, {
    onSuccess: () => {
      router.push(PAGE_URL.USER_LIST);
    },
  });
};
</script>

<template>
  <MainTemplate title="ユーザー新規登録">
    <UserForm @submit="handleSubmit" @prev="handlePrev" />
  </MainTemplate>
</template>
