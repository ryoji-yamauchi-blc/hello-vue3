<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { computed } from "vue";

const props = defineProps<{
  value: string | boolean;
  modelValue: string | boolean | string[];
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | boolean | string[]): void;
}>();

const isModelArray = computed(() => Array.isArray(props.modelValue));

const isChecked = computed(() =>
  isModelArray.value
    ? (props.modelValue as string[]).includes(props.value as string)
    : props.modelValue === props.value
);

const classes = computed(() => ({
  "checkbox--disabled": props.disabled,
  "checkbox--checked": isChecked.value,
}));

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement;

  if (isModelArray.value) {
    const modelValue = props.modelValue as string[];
    const value = target.checked
      ? [...modelValue, target.value]
      : modelValue.filter((v) => v !== target.value);
    emit("update:modelValue", value);
    return;
  }

  const falsy = typeof props.value === "boolean" ? false : "";
  const value = target.checked ? props.value : falsy;
  emit("update:modelValue", value);
};
</script>

<template>
  <label class="checkbox" :class="classes">
    <input
      type="checkbox"
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

.checkbox {
  display: inline-flex;
  height: 28px;
  align-items: center;
  min-width: 60px;
  border-radius: 6px;
  border-width: 1px;
  border-color: var(--w-p-negative);
  padding-left: 8px;
  padding-right: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &--checked {
    background-color: var(--w-p-primary);
    border-width: 0;
    color: var(--w-c-white);

    & .check {
      background-color: var(--w-c-white);
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
  width: 16px;
  height: 16px;
  background-color: var(--w-c-white);
  border-width: 1px;
  border-color: var(--w-p-negative);
  position: relative;

  &::before {
    content: "";
    opacity: 0;
    display: inline-block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%) rotate(-45deg);
    width: 10px;
    height: 5px;
    left: 3px;
    border-left: 2px solid var(--w-p-primary);
    border-bottom: 2px solid var(--w-p-primary);
    border-radius: 1px;
  }
}
</style>
