<script lang="ts">
//import type { User } from "@/models";
</script>

<script lang="ts" setup>
import { ListCell } from "@/components/atoms";

const props = defineProps<{
  id: number;
  name: string;
}>();
</script>

<template>
  <div class="row">
    <ListCell>
      {{ props.id }}
    </ListCell>
    <ListCell>
      {{ props.name }}
    </ListCell>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
