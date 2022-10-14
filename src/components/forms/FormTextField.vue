<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { useField } from "vee-validate";
import { toRef } from "vue";
import { Tooltip, TextField } from "@/components/atoms";

type UseFieldArgs = Parameters<typeof useField<string>>;

const props = defineProps<{
  name: string;
  rules?: UseFieldArgs[1];
  fieldOptions?: UseFieldArgs[2];
  // NOTE ComponentProps<typeof Tooltip>ができるようになったら、切り替えたい
  placement?: "top" | "bottom" | "left" | "right";
}>();

const nameRef = toRef(props, "name");
const { value, errorMessage } = useField<string>(
  nameRef,
  props.rules,
  props.fieldOptions
);
</script>

<template>
  <Tooltip :show="!!errorMessage" :content="errorMessage">
    <TextField v-model="value" :isError="!!errorMessage" v-bind="$attrs" />
  </Tooltip>
</template>
