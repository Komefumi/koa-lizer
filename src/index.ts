import Koa from "koa";
import { utilizeRouterList } from "./utils/router";
import apiRouter from "./routes/api";

const app = new Koa();

/*
app.use(ctx => {
  ctx.body = "Hello Koa";
});
 */

utilizeRouterList(app, [apiRouter]);

app.listen(3000, function() {
  console.log('Koa app running on port 3000');
});
