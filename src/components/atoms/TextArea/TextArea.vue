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
  <textarea
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
  display: inline-block;
  width: 100%;
  padding-top: 12px;
  padding-left: 16px;
  padding-left: 16px;
  padding-bottom: 12px;
  border-radius: 4px;
  border-width: 1px;
  border-color: var(--w-c-gray300);
  overflow: scroll;

  &--error {
    border-color: var(--w-p-primary);
  }
}
</style>
