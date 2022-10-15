<script lang="ts" setup>
import { computed } from "vue";
const { variant = "primary" } = defineProps<{
  variant?: "primary" | "secondary" | "attention";
}>();

const style = computed(() => {
  return `button--${variant}`;
});
</script>

<template>
  <button class="button" :class="style"><slot /></button>
</template>

<style lang="scss" scoped>
.button {
  padding: 10px;
  border-radius: 4px;
  color: var(--vt-c-white);
  display: flex;
  justify-content: center;

  &--primary {
    background-color: var(--vt-c-blue);
  }

  &--secondary {
    color: var(--vt-c-black);
    background-color: var(--vt-c-gray300);
  }

  &--attention {
    background-color: var(--vt-c-red);
  }
}
</style>
