import Router from "@koa/router";

const router = new Router({ prefix: "/api" });

router.get("/", (ctx, _next) => {
  ctx.body = "Welcome to the root route";
});

router.get("/timeline", (ctx, _next) => {
  ctx.body = "Welcome to the timeline route";
});

export default router;
