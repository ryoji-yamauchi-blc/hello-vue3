<script lang="ts" setup>
import type { User } from "@/models";
import { PAGE_URL } from "@/enums";
import { ListCell, Icon } from "@/components/atoms";

const props = defineProps<{
  user: User;
}>();
</script>

<template>
  <div class="row">
    <ListCell>
      {{ props.user.id }}
    </ListCell>
    <ListCell>
      {{ props.user.name }}
    </ListCell>
    <ListCell>
      <RouterLink :to="PAGE_URL.USER_EDIT(props.user.id)">
        <Icon name="edit" />
      </RouterLink>
    </ListCell>
  </div>
</template>

<style lang="scss" scoped>
.row {
  display: grid;
  grid-template-columns: 1fr 1fr 50px;
}
</style>
