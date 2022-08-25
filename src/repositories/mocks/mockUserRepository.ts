import { rest } from "msw";
import { API_URL } from "@/enums";
import type { GetUsersResponse } from "../userRepository";

type User = GetUsersResponse["users"][0];

const createUser = (attr?: Partial<User>): User => ({
  id: 1,
  name: "taro",
  ...attr,
});

const users = [createUser(), createUser({ id: 2 })];

const get = rest.get(API_URL.GET_USERS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ users }), ctx.delay(1000));
});

const post = rest.post(API_URL.POST_USERS, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ users }), ctx.delay(1000));
});

export const mockUserRepository = [get, post];
