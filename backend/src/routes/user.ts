import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signupSchema, signinSchema } from "@rishibeesu/medium-common";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const body = await c.req.json();
  const { success } = signupSchema.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "Invalid Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });
    const token = await sign(
      {
        userId: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.text(token);
  } catch (e) {
    c.status(411);
    return c.text("Invalid");
  }
});

userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const { success } = signinSchema.safeParse(body);
  if (!success) {
    c.status(411);
    c.json({
      message: "Invalid Inputs",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  const user = await prisma.user.findUnique({
    where: {
      email: body.username,
      password: body.password,
    },
  });
  if (!user) {
    c.status(403);
    return c.text("Unauthorized");
  }
  const token = sign(
    {
      userId: user.id,
    },
    c.env.JWT_SECRET
  );

  c.status(200);
  return c.json({
    token,
  });
});
