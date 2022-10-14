<script setup lang="ts">
import { MainTemplate } from "@/components/templates";
import { Stack } from "@/components/layouts";
</script>

<template>
  <MainTemplate title="Vue3素振りページ">
    <Stack>
      <section>
        <p>以下は認証不要</p>
        <ul>
          <li>ログインページ</li>
        </ul>
      </section>
      <section>
        <p>以下は認証が必要</p>
        <ul>
          <li>ユーザー一覧</li>
        </ul>
      </section>
    </Stack>
  </MainTemplate>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
