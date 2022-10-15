import * as zod from "zod";

export type User = {
  id: string;
  name: string;
};

export const userFormSchema = zod.object({
  id: zod.string().min(1),
  name: zod.string().min(1),
});

export type UserFormValues = zod.infer<typeof userFormSchema>;
