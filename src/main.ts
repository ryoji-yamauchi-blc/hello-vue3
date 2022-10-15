import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueQueryPlugin } from "@tanstack/vue-query";
import { worker } from "@/repositories/mocks/browser";
import App from "./App.vue";
import router from "./router";
import "./assets/main.scss";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueQueryPlugin);

if (process.env.NODE_ENV === "development") {
  worker.start();
}

app.mount("#app");
