import type { User } from "@/models";
import { client } from "./client";

export type GetUsersResponse = {
  users: UserSchema[];
};

type UserSchema = {
  id: User["id"];
  name: User["name"];
};

const gets = async () => {
  const response = (await client.exec("/users")) as GetUsersResponse;
  return response.users;
};

export const userRepository = {
  gets,
};
