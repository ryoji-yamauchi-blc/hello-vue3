<script lang="ts" setup>
import Popper from "vue3-popper";
// https://valgeirb.github.io/vue3-popper/guide/api.html#api

const props = defineProps<{
  content?: string;
  show?: boolean;
}>();
</script>

<template>
  <Popper v-bind="$attrs" arrow :content="props.content" :show="props.show">
    <slot></slot>
  </Popper>
</template>

<style scoped>
:deep(.popper) {
  font-size: 0.875em;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 1em;
  padding-right: 1em;
}
</style>
