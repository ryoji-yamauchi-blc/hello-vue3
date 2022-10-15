<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  modelValue: string;
  isError?: boolean;
}>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:event", v: Event): void;
}>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:event", e);
  emit("update:modelValue", target.value);
};

const styles = computed(() => ({
  "input--error": !!props.isError,
}));
</script>

<template>
  <input
    class="input"
    :class="styles"
    type="text"
    :value="props.modelValue"
    @input="handleChange"
    v-bind="$attrs"
  />
</template>

<style lang="scss" scoped>
.input {
  display: inline-flex;
  width: 100%;
  height: 40px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  border-radius: 4px;
  border-width: 1px;
  border-color: var(--vt-c-gray300);

  &:disabled {
    background-color: var(--vt-c-gray300);
  }

  &--error {
    border-color: var(--vt-p-attention);
  }
}
</style>
