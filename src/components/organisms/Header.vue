<script lang="ts" setup>
import { useAuthStore } from "@/stores";
const store = useAuthStore();
</script>

<template>
  <header class="header">
    <h1>Hello Vue3</h1>
    <div>
      {{ store.name }}
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 10px;
  background-color: var(--color-header);
  display: flex;
  justify-content: space-between;
}
</style>
