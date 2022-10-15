<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  value: string;
  modelValue: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const isChecked = computed(() => props.modelValue === props.value);
const classes = computed(() => ({
  "radio--disabled": props.disabled,
  "radio--checked": isChecked.value,
}));

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
};
</script>

<template>
  <label class="radio" :class="classes">
    <input
      type="radio"
      :value="props.value"
      :checked="isChecked"
      @change="handleChange"
      v-bind="$attrs"
    />
    <div class="inner">
      <span class="check" />
      <slot></slot>
    </div>
  </label>
</template>

<style lang="scss" scoped>
// デフォルトのinput要素は非表示にする
input {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  width: 0;
}

.radio {
  display: inline-flex;
  height: 28px;
  align-items: center;
  min-width: 60px;
  border-radius: 12px;
  border-width: 1px;
  border-color: var(--vt-p-negative);
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &--checked {
    background-color: var(--vt-p-primary);
    border-width: 0;
    color: var(--vt-c-white);

    & .check {
      background-color: var(--vt-c-white);
      border-width: 0;

      &::before {
        opacity: 1;
      }
    }
  }
}

.inner {
  display: flex;
  align-items: center;
  gap: 6px;
}

.check {
  display: inline-block;
  width: 14px;
  height: 14px;
  background-color: var(--vt-p-negative);
  border-radius: 50%;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: var(--vt-p-primary);
    border-radius: 50%;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
