<script setup lang="ts">
import { PAGE_URL } from "@/enums";
import { MainTemplate } from "@/components/templates";
import { Button } from "@/components/atoms";
import UserList from "./UserList.vue";
</script>

<template>
  <MainTemplate title="ユーザー一覧">
    <div class="buttons">
      <RouterLink :to="PAGE_URL.USER_CREATE">
        <Button type="button">新規登録</Button>
      </RouterLink>
      <Button type="button" variant="attention">削除</Button>
    </div>
    <UserList class="user-list" />
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
