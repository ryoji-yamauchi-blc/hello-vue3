<script lang="ts">
import { addIcons, OhVueIcon } from "oh-vue-icons";
import { MdModeeditoutlineRound } from "oh-vue-icons/icons";
addIcons(MdModeeditoutlineRound);

export const ALIAS = {
  edit: "md-modeeditoutline-round",
} as const;

export type ICON_NAME = keyof typeof ALIAS;
</script>

<script lang="ts" setup>
const props = defineProps<{ name: ICON_NAME }>();
const name = ALIAS[props.name] as string;
</script>

<template>
  <OhVueIcon :name="name" />
</template>

<style lang="scss" scoped></style>
