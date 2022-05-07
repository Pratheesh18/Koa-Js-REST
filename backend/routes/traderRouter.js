import Router from "@koa/router";

import {
  createTrader,
  getTrader,
  getAllTraders,
  updateTrader,
  deleteTrader,
} from "../api/traderApi.js";

const traderprofileRouter = new Router({
  prefix: "/traderprofiles",
});

traderprofileRouter.post("/", (ctx) => { //post method for traders
  const data = ctx.request.body;
  ctx.body = createTrader(data);
  ctx.set("Content-Type", "application/json");
  ctx.status = 201;
});


traderprofileRouter.get("/", (ctx) => { //get all traders 
  ctx.body = getAllTraders();
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


traderprofileRouter.get("/:id", (ctx) => { // getting the one trader
  const id = ctx.params.id;
  ctx.body = getTrader(id);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


traderprofileRouter.put("/:id", (ctx) => {  //update the trader
  const id = ctx.params.id;
  ctx.body = updateTrader(id, ctx.request.body);
  ctx.set("Content-Type", "application/json");
  ctx.status = 200;
});


traderprofileRouter.del("/:id", (ctx) => {  //delete the trader
  const id = ctx.params.id;
  deleteTrader(id);
  ctx.status = 204;
});

export default traderprofileRouter;
