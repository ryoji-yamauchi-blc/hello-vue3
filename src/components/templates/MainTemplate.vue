<script lang="ts" setup>
import { Header } from "@/components/organisms";

const { showHeader = true } = defineProps<{
  showHeader?: boolean;
}>();
</script>

<template>
  <Header v-if="showHeader" />
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 10px;
  height: 100%;
}
</style>
