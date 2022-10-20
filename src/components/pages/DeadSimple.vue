<script setup lang="ts">
import { ref } from "vue";
const counter = ref(0);
const increment = () => {
  counter.value = counter.value + 1;
};
</script>

<template>
  <div>
    <button @click="increment">foo</button>
  </div>
</template>
