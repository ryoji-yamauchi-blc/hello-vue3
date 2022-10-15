import { rest } from "msw";
import { API_URL } from "@/enums";
import type { GetUsersResponse } from "../userRepository";

type User = GetUsersResponse["users"][0];

const createUser = (attr?: Partial<User>): User => ({
  id: "1",
  name: "taro",
  ...attr,
});

const users = [createUser(), createUser({ id: "2", name: "jiro" })];

const gets = rest.get(API_URL.GET_USER_LIST, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json({ users }), ctx.delay(1000));
});

const get = rest.get(API_URL.GET_USER(":id"), (req, res, ctx) => {
  const user = users.find((user) => user.id === req.params.id);
  if (!user) {
    return res(ctx.status(404), ctx.json({}), ctx.delay(300));
  }
  return res(ctx.status(200), ctx.json(user), ctx.delay(300));
});

const post = rest.post(API_URL.POST_USER, async (req, res, ctx) => {
  const formValues = (await req.json()) as User;
  users.push(createUser(formValues));
  return res(ctx.status(200), ctx.json({ users }), ctx.delay(1000));
});

const put = rest.put(API_URL.PUT_USER(":id"), async (req, res, ctx) => {
  const formValues = (await req.json()) as User;
  const userIndex = users.findIndex((user) => user.id === req.params.id);
  if (userIndex === -1) {
    return res(ctx.status(404), ctx.json({}), ctx.delay(300));
  }
  const newUser = createUser(formValues);
  users[userIndex] = newUser;
  return res(ctx.status(200), ctx.json(newUser), ctx.delay(300));
});

export const mockUserRepository = [gets, get, post, put];
