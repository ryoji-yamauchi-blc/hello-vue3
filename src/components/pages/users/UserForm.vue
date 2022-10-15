<script setup lang="ts">
import { useForm } from "vee-validate";
import { toFormValidator } from "@vee-validate/zod";
import type { UserFormValues } from "@/models";
import { userFormSchema } from "@/models";
import { FormTextField } from "@/components/forms";
import { Stack } from "@/components/layouts";
import { Button } from "@/components/atoms";

const props = defineProps<{
  initialValues?: UserFormValues;
  isEdit?: boolean;
}>();

const emit = defineEmits<{
  (e: "prev"): void;
  (e: "submit", formValues: UserFormValues): void;
}>();

const validationSchema = toFormValidator(userFormSchema);

const { handleSubmit } = useForm<UserFormValues>({
  initialValues: props.initialValues || {
    id: "",
    name: "",
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
      <div class="row">
        <label for="id">id</label>
        <FormTextField name="id" :disabled="isEdit" />
      </div>
      <div class="row">
        <label for="name">name</label>
        <FormTextField name="name" />
      </div>
      <div class="footer">
        <Button type="button" variant="secondary" @click="emit('prev')">
          戻る
        </Button>
        <Button type="submit">登録</Button>
      </div>
    </Stack>
  </form>
</template>

<style lang="scss">
input {
  border: 1px solid black;
}

.row {
  & > label {
    display: inline-block;
    width: 100px;
  }
}

.footer {
  display: flex;
  gap: 16px;
}
</style>
