<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { toRef } from "vue";
import { useField } from "vee-validate";
import { TextField } from "@/components/atoms";

const props = defineProps<{
  name: string;
  rule?: (value: any) => true | string;
}>();

const nameRef = toRef(props, "name");
const ruleRef = toRef(props, "rule");
const { value, errorMessage } = useField<string>(nameRef, ruleRef);
</script>

<template>
  <div>
    <TextField
      v-model="value"
      :error-message="errorMessage"
      :name="props.name"
      v-bind="$attrs"
    />
    <p>{{ errorMessage }}</p>
  </div>
</template>
