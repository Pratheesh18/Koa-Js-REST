import Router from "@koa/router";
import {createPromo, getPromo, getAllPromos, updatePromo, deletePromo} from "../api/promotionApi.js";

const promoRouter = new Router({
  prefix: "/promo",
});

promoRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createPromo(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});


promoRouter.get("/", (ctx) => {
  ctx.body = getAllPromos();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getPromo(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = updatePromo(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

promoRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deletePromo(id);
  ctx.status = 204;
});
export default promoRouter;
