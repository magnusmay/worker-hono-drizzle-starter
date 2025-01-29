import { Hono } from "hono";
import { number, object, string } from "valibot";
import { vValidator } from "@hono/valibot-validator";

const app = new Hono<{ Bindings: CloudflareBindings }>();

const schema = object({
  name: string(),
  age: number(),
});

app.post("/user", vValidator("json", schema), (c) => {
  const data = c.req.valid("json");
  return c.json({
    success: true,
    message: `${data.name} is ${data.age}`,
  });
});

export default app;
