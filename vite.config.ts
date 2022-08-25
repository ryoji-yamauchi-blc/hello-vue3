import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // https://vuejs.org/guide/extras/reactivity-transform.html#explicit-opt-in
      // https://github.com/vuejs/rfcs/discussions/369
      reactivityTransform: true,
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
