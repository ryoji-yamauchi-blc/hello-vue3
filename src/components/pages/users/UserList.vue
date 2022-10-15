<script lang="ts"></script>

<script lang="ts" setup>
import { useUserList } from "@/components/composables";
import UserListHeader from "./UserListHeader.vue";
import UserListItem from "./UserListItem.vue";
const { data: users, isRefetching } = useUserList();
</script>

<template>
  <div>
    <UserListHeader />
    <div v-if="users && !isRefetching">
      <div v-for="user in users" :key="user.id">
        <UserListItem :user="user" />
      </div>
    </div>
    <div v-else>...loading</div>
  </div>
</template>
