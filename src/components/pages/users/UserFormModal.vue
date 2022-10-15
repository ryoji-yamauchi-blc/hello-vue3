<script lang="ts" setup>
import type { UserFormValues } from "@/models";
import { useUser } from "@/components/composables";
import { Modal } from "@/components/molecules";
import UserForm from "./UserForm.vue";

const emit = defineEmits<{ (e: "close"): void }>();

const { post, isMutating } = useUser();

const handleSubmit = (formValues: UserFormValues) => {
  post(formValues, {
    onSuccess: () => {
      emit("close");
    },
  });
};
</script>

<template>
  <Modal>
    <div>
      <UserForm @submit="handleSubmit" />
      <div v-if="isMutating" class="loading-overlay"></div>
    </div>
  </Modal>
</template>

<style lang="scss" scoped>
.base {
  position: relative;
}

.loading-overlay {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.6);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
