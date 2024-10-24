import zod from "zod";

export const signupSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
  name: zod.string().optional(),
});

export const signinSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});

export const createBlogInput = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export const updateBlogInput = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export type SignupSchema = zod.infer<typeof signupSchema>;
export type SigninSchema = zod.infer<typeof signinSchema>;
export type CreateBlogInput = zod.infer<typeof createBlogInput>;
export type UpdateBlogInput = zod.infer<typeof updateBlogInput>;
