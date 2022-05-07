import Router from "@koa/router";
import { createCustomer, getCustomer, getAll, update, deleteCustomer} from "../api/customerApi.js";

const customerRouter = new Router({
  prefix: "/customers",
});

//Create a customer 
customerRouter.post("/", (ctx) => {
  const data = ctx.request.body;
  ctx.body = createCustomer(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});

//Get All Customers
customerRouter.get("/", (ctx) => {
  ctx.body = getAll();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Get Customers by id
customerRouter.get("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = getCustomer(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Update customers by ID
customerRouter.put("/:id", (ctx) => {
  const id = ctx.params.id;
  ctx.body = update(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});

//Delete customers by ID
customerRouter.del("/:id", (ctx) => {
  const id = ctx.params.id;
  deleteCustomer(id);
  ctx.status = 204;
});

export default customerRouter;
