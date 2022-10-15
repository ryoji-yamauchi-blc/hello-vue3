<script lang="ts" setup>
import { Title } from "@/components/atoms";
defineProps<{ title: string }>();
</script>

<template>
  <div class="container">
    <Title>{{ title }}</Title>
    <div class="body">
      <slot />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding: 16px;
  min-width: 800px;
}

.body {
  margin-top: 16px;
}
</style>
