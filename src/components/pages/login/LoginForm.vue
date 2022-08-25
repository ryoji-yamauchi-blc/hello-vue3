<script lang="ts" setup>
import { useForm } from "vee-validate";
import type { LoginFormValues } from "@/models";
import { Stack } from "@/components/layouts";
import { Button } from "@/components/atoms";
import { FormTextField } from "@/components/forms";

const emit = defineEmits<{
  (e: "submit", formValues: LoginFormValues): void;
}>();

const { handleSubmit } = useForm({
  initialValues: {
    id: "",
    password: "",
  },
});

const onSubmit = handleSubmit((formValues) => {
  emit("submit", formValues);
});
</script>

<template>
  <form @submit="onSubmit">
    <Stack>
      <FormTextField name="id" placeholder="id" />
      <FormTextField name="password" placeholder="password" />
      <Button type="submit">ログイン</Button>
    </Stack>
  </form>
</template>
