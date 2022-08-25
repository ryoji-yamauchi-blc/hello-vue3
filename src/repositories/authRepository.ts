import type { Auth, LoginFormValues } from "@/models";
import { client } from "./client";

export type LoginResponse = {
  id: Auth["id"];
  name: Auth["name"];
  role: Auth["role"];
};

const login = async (formValues: LoginFormValues) => {
  const response = (await client.exec("/login", {
    method: "POST",
    body: JSON.stringify(formValues),
  })) as LoginResponse;
  return response;
};

export const authRepository = {
  login,
};
