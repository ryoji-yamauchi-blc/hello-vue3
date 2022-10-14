<script lang="ts" setup>
import { Header, SideMenu, Content } from "@/components/organisms";
defineProps<{ title: string }>();
</script>

<template>
  <div class="root-container">
    <Header class="header" />
    <SideMenu class="side-menu" />
    <div class="content">
      <Content :title="title">
        <slot />
      </Content>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.root-container {
  height: 100%;
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "header header"
    "side-menu content";
}

.header {
  grid-area: header;
}

.side-menu {
  grid-area: side-menu;
}

.content {
  height: 100%;
  grid-area: content;
  overflow: auto;
}
</style>
