import { Hono } from "hono";
import { authMiddleware } from "../middlewares/auth.ts";
import { render } from "../utils/render.ts";

const authRoutes = new Hono();
authRoutes.use("*", authMiddleware);

authRoutes.get("/dashboard", (c) => {
  const role = c.get("userRole");
  return render(c, "dashboard", { role });
});

authRoutes.get("/admin", (c) => {
  const role = c.get("userRole");
  if (role !== "ADMIN") return c.text("Forbidden", 403);
  return render(c, "admin", { role });
});

authRoutes.get("/moderator", (c) => {
  const role = c.get("userRole");
  if (role !== "MODERATOR" && role !== "ADMIN") return c.text("Forbidden", 403);
  return render(c, "moderator", { role });
});

authRoutes.get("/user", (c) => {
  const role = c.get("userRole");
  if (role !== "USER" && role !== "ADMIN") return c.text("Forbidden", 403);
  return render(c, "user", { role });
});

export default authRoutes;
