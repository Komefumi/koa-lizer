import Koa from "koa";
import Router from "@koa/router";

export function utilizeRouter(app: Koa, router: Router) {
  app.use(router.routes()).use(router.allowedMethods());
}

export function utilizeRouterList(app: Koa, routers: Router[]) {
  routers.forEach((routerItem) => {
    utilizeRouter(app, routerItem);
  });
}
