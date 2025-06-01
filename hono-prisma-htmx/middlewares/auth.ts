import { Context, Next } from "hono";

export const authMiddleware = async (c: Context, next: Next) => {
  const userRole = c.req.header("x-user-role"); // Replace with actual auth logic
  if (!userRole) return c.text("Unauthorized", 401);
  c.set("userRole", userRole);
  await next();
};
