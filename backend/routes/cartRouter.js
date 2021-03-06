import Router from "@koa/router";
import { create, get, getAll, update, deleteCart } from "../api/cartApi.js";

const cartRouter = new Router({
  prefix: "/carts",
});

//Create a Cart Method
cartRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = create(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

//Get All Datas
cartRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Get Data by ID
cartRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = get(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Update Data by ID
cartRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Delete Data by ID
cartRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteCart(id);
  ctx.status = 204;
});
export default cartRouter;
