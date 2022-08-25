<script lang="ts">
//export type FormValues = {
//  name: string;
//  password: string;
//};
</script>

<script setup lang="ts">
import { useForm, useField } from "vee-validate";
import { validator } from "@/utils";
import { Button } from "@/components/atoms";
import { TextField } from "@/components/atoms";

//const props = defineProps({
//  defaultValues: {
//    type: Object as PropType<UserFormValues>,
//    required: true,
//  },
//});

//const emit = defineEmits<{ (e: "submit", formValues: UserFormValues): void }>();

//const formValues = reactive(props.defaultValues);

const { handleSubmit } = useForm();
const { value, errorMessage } = useField<string>("id", validator.id, {
  initialValue: "",
});

const onSubmit = handleSubmit((formValues) => {
  console.log(formValues);
});
</script>

<template>
  <form @submit="onSubmit">
    <div>
      <TextField v-model="value" :error-message="errorMessage" />
    </div>
    <Button type="submit">登録</Button>
  </form>
</template>

<style lang="scss">
input {
  border: 1px solid black;
}
</style>
