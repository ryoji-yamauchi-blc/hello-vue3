<script lang="ts" setup>
import { useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import type { LoginFormValues } from "@/models";
import { loginFormSchema } from "@/models";
import { Stack } from "@/components/layouts";
import { FormTextField } from "@/components/forms";
import { Button } from "@/components/atoms";

const emit = defineEmits<{
  (e: "submit", formValues: LoginFormValues): void;
}>();

const validationSchema = toFormValidator(loginFormSchema);

const { handleSubmit } = useForm<LoginFormValues>({
  initialValues: {
    id: "",
    password: "",
  },
  validationSchema,
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
