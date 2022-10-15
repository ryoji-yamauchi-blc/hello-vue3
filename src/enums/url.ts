import type { User } from "@/models";

export const PAGE_URL = {
  WELCOME: "/",
  USER_LOGIN: "/login",
  USER_LIST: "/users",
  USER_CREATE: "/users/create",
  USER_EDIT: (id: User["id"]) => `/users/${id}/edit`,
};

export const API_URL = {
  LOGIN: "/login",
  GET_USER_LIST: "/users",
  GET_USER: (id: User["id"]) => `/users/${id}`,
  POST_USER: "/users",
  PUT_USER: (id: User["id"]) => `/users/${id}`,
};
