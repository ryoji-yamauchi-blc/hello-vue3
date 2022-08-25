<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  errorMessage?: string;
}>();
const emit = defineEmits<{ (e: "update:modelValue", value: string): void }>();

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <div>
    <input
      class="input"
      type="text"
      :value="props.modelValue"
      @input="handleChange"
      v-bind="$attrs"
    />
    <div>{{ props.errorMessage }}</div>
  </div>
</template>

<style lang="scss" scoped>
.input {
  display: inline-block;
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border-width: 1px;
  border-color: var(--vt-c-gray300);
}
</style>
