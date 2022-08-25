<template>
  <div class="stack">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
