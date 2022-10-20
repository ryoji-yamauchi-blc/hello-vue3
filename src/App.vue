<script setup lang="ts">
//import { onMounted, onUnmounted } from "vue";
import { RouterView } from "vue-router";

// ページ離脱時の制御
//const handleBeforeUnload = (e: BeforeUnloadEvent) => {
//  e.preventDefault();
//  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//  //@ts-ignore
//  event.returnValue = "";
//  return "";
//};
//onMounted(() => {
//  window.addEventListener("beforeunload", handleBeforeUnload);
//});
//onUnmounted(() => {
//  window.removeEventListener("beforeunload", handleBeforeUnload);
//});
</script>

<template>
  <RouterView />
</template>
