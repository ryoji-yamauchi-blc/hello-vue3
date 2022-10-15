<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import type { UserFormValues } from "@/models";
import { PAGE_URL } from "@/enums";
import { useUser } from "@/components/composables";
import { MainTemplate } from "@/components/templates";
import UserForm from "./UserForm.vue";

const router = useRouter();
const route = useRoute();
const id = route.params.id as string;
const { put, data } = useUser(id);

const handlePrev = () => {
  router.push(PAGE_URL.USER_LIST);
};

const handleSubmit = async (formValues: UserFormValues) => {
  put(formValues, {
    onSuccess: () => {
      router.push(PAGE_URL.USER_LIST);
    },
  });
};
</script>

<template>
  <MainTemplate title="ユーザー編集">
    <UserForm
      v-if="data"
      :initial-values="data"
      isEdit
      @submit="handleSubmit"
      @prev="handlePrev"
    />
    <div v-else>...loading</div>
  </MainTemplate>
</template>
