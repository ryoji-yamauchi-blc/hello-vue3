import * as zod from "zod";

export type Auth = {
  id: string;
  name: string;
  role: string;
};

export const loginFormSchema = zod.object({
  id: zod.string().min(1),
  password: zod.string().min(1),
});

export type LoginFormValues = zod.infer<typeof loginFormSchema>;
