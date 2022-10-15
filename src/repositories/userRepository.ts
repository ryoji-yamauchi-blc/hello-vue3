import { API_URL } from "@/enums";
import type { User, UserFormValues } from "@/models";
import { client } from "./client";

export type GetUsersResponse = {
  users: UserSchema[];
};

type UserSchema = {
  id: User["id"];
  name: User["name"];
};

const gets = async () => {
  const response = (await client.exec(
    API_URL.GET_USER_LIST
  )) as GetUsersResponse;
  return response.users;
};

const get = async (id: User["id"]) => {
  const response = await client.exec(API_URL.GET_USER(id));
  return response;
};

const post = async (formValues: UserFormValues) => {
  const body = formValues;
  const response = await client.exec(API_URL.POST_USER, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return response;
};

const put = async (formValues: UserFormValues) => {
  const body = formValues;
  const response = await client.exec(API_URL.PUT_USER(formValues.id), {
    method: "PUT",
    body: JSON.stringify(body),
  });
  return response;
};

export const userRepository = {
  gets,
  get,
  post,
  put,
};
