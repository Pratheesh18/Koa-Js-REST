import Router from "@koa/router";
import { createItems, getItem, getAllItems, updateItems, deleteItems } from "../api/itemApi.js";

const itemRouter = new Router({
  prefix: "/items",
});


itemRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createItems(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});


itemRouter.get("/", (ctx) => {
  ctx.body = getAllItems();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


itemRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getItem(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


itemRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = updateItems(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

 
itemRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteItems(id);
  ctx.status = 204;
});
export default itemRouter;
