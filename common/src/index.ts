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

export const createBlogSchema = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export const updateBlogSchema = zod.object({
  title: zod.string(),
  content: zod.string(),
});

export type SignupSchema = zod.infer<typeof signupSchema>;
export type SigninSchema = zod.infer<typeof signinSchema>;
export type CreateBlogSchema = zod.infer<typeof createBlogSchema>;
export type UpdateBlogSchema = zod.infer<typeof updateBlogSchema>;
