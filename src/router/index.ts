import { createRouter, createWebHistory } from "vue-router";
import LoginView from "@/views/LoginView.vue";
import WelcomeView from "@/views/WelcomeView.vue";
import UserListView from "@/views/users/UserListView.vue";
import UserCreateView from "@/views/users/UserCreateView.vue";
import UserEditView from "@/views/users/UserEditView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "welcome",
      component: WelcomeView,
    },
    {
      path: "/users",
      name: "users",
      component: UserListView,
    },
    {
      path: "/users/create",
      name: "user-create",
      component: UserCreateView,
    },
    {
      path: "/users/:id/edit",
      name: "user-edit",
      component: UserEditView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
