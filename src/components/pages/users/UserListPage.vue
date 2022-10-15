<script setup lang="ts">
import { PAGE_URL } from "@/enums";
import { useModal } from "@/components/composables";
import { MainTemplate } from "@/components/templates";
import { Button } from "@/components/atoms";
import UserList from "./UserList.vue";
import UserFormModal from "./UserFormModal.vue";

const { show, modalShown, close } = useModal();
</script>

<template>
  <MainTemplate title="ユーザー一覧">
    <div class="buttons">
      <RouterLink :to="PAGE_URL.USER_CREATE">
        <Button type="button">新規登録</Button>
      </RouterLink>
      <Button type="button" @click="show">新規登録(modal ver)</Button>
      <Button type="button" variant="attention">削除</Button>
    </div>
    <UserList class="user-list" />
    <UserFormModal v-if="modalShown" @close="close" />
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
