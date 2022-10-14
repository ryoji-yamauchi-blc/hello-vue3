<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRef } from "vue";
import { RadioButton } from "@/components/atoms";

type UseFieldArgs = Parameters<typeof useField<string>>;

const props = defineProps<{
  name: string;
  value: string;
  rules?: UseFieldArgs[1];
  fieldOptions?: UseFieldArgs[2];
}>();

const nameRef = toRef(props, "name");
const { value } = useField<string>(nameRef, props.rules, props.fieldOptions);
</script>

<template>
  <RadioButton v-model="value" :value="props.value">
    <slot></slot>
  </RadioButton>
</template>
