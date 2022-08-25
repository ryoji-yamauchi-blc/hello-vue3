import { rest } from "msw";
import { API_URL } from "@/enums";
import type { LoginResponse } from "../authRepository";

const createSession = (attr?: Partial<LoginResponse>): LoginResponse => ({
  id: 1,
  name: "taro",
  ...attr,
});

const login = rest.post(API_URL.LOGIN, (req, res, ctx) => {
  return res(ctx.status(200), ctx.json(createSession()), ctx.delay(1000));
});

export const mockAuthRepository = [login];
