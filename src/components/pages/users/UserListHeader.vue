<script lang="ts" setup>
import { ListCell } from "@/components/atoms";
</script>

<template>
  <div class="row">
    <ListCell>ID</ListCell>
    <ListCell>名前</ListCell>
    <!-- 編集 -->
    <ListCell></ListCell>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
  border-bottom-width: 1px;
  border-bottom-color: var(--vt-c-gray300);
}
</style>
