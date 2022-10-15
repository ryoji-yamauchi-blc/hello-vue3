<script setup lang="ts">
import { Stack } from "@/components/layouts";
import { Title } from "@/components/atoms";
import { PAGE_URL } from "@/enums";
</script>

<template>
  <div class="container">
    <Title>Vue3素振りページ</Title>
    <div class="content">
      <Stack>
        <RouterLink class="link" :to="PAGE_URL.USER_LOGIN">
          WIP:ログインページ
        </RouterLink>
        <RouterLink class="link" :to="PAGE_URL.USER_LIST">
          ログイン後のページ
        </RouterLink>
      </Stack>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 16px;
}

.link {
  text-decoration: underline;
}
</style>
