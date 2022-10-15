import { ref } from "vue";

export const useModal = () => {
  const modalShown = ref("");
  const resolver = ref<(result: boolean) => void>();

  const show = (type?: string) => {
    modalShown.value = type || "true";
    return new Promise((resolve) => {
      resolver.value = resolve;
    });
  };

  const apply = () => {
    resolver.value && resolver.value(true);
  };

  const close = () => {
    resolver.value && resolver.value(true);
    modalShown.value = "";
  };

  return {
    modalShown,
    apply,
    show,
    close,
  };
};
