<script setup lang="ts">
import { MainTemplate } from "@/components/templates";
import UserList from "./UserList.vue";
import { Button } from "@/components/atoms";
</script>

<template>
  <MainTemplate>
    <div class="page-inner">
      <div class="buttons">
        <RouterLink to="/users/create">
          <Button type="button">新規登録</Button>
        </RouterLink>
        <Button type="button" variant="attention">削除</Button>
      </div>
      <UserList class="user-list" />
    </div>
  </MainTemplate>
</template>

<style lang="scss" scoped>
.buttons {
  display: flex;
  gap: 10px;
}

.user-list {
  margin-top: 10px;
}
</style>
