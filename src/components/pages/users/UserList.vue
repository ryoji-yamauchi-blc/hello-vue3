<script lang="ts"></script>

<script lang="ts" setup>
import type { User } from "@/models";
import { API_URL } from "@/enums";
import { useFetch } from "@/components/composables";
import UserListHeader from "./UserListHeader.vue";
import UserListItem from "./UserListItem.vue";
const { data: users } = useFetch<User[]>({ url: API_URL.GET_USERS });
</script>

<template>
  <div>
    <UserListHeader />
    <div v-if="users">
      <div v-for="user in users" :key="user.id">
        <UserListItem :id="user.id" :name="user.name" />
      </div>
    </div>
    <div v-else>...loading</div>
  </div>
</template>
