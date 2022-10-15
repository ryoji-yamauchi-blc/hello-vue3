<script lang="ts" setup>
import { PAGE_URL } from "@/enums";
</script>

<template>
  <aside>
    <RouterLink :to="PAGE_URL.WELCOME" class="item">index</RouterLink>
  </aside>
</template>

<style lang="scss" scoped>
.side-menu {
  border-right-width: 1px;
  border-right-color: var(--vt-c-gray300);
}

.item {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 8px;
}
</style>
