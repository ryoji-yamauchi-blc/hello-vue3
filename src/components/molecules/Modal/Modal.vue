<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>

<script lang="ts" setup>
import { Overlay } from "@/components/atoms";
</script>

<template>
  <Overlay>
    <div class="modal" v-bind="$attrs">
      <slot />
    </div>
  </Overlay>
</template>

<style lang="scss" scoped>
.modal {
  padding: 16px;
  background-color: var(--vt-c-white);
  box-shadow: var(--vt-shadow-2dp);
}
</style>
