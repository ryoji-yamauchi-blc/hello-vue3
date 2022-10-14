<script setup lang="ts">
import { MainTemplate } from "@/components/templates";
</script>

<template>
  <MainTemplate title="Vue3素振りページ">
    <div class="container">
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
    </div>
  </MainTemplate>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>
