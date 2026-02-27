import { Hono } from "hono";

type Env = {
  // Add bindings later when needed
};

const app = new Hono<{ Bindings: Env }>();

export default app;