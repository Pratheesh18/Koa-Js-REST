import { randomBytes } from "crypto";

const carts = new Map(); //Mapping the data to project

export const create = ({ text }) => {  //exporting this object to cartRouter.js
  const cart = {
    id: randomBytes(16).toString("hex"),
    text,
    postedDate: new Date(),
  };
  carts.set(cart.id, cart);
  return cart;
};

export const get = (id) => { //getting the item 
  const cart = carts.get(id);
  if (!cart) {
    throw new Error(`Not founded  ${id}`);
  }
  return cart;
};

export const getAll = () => { //get all the cart items
  return [...carts.values()];
};

export const update = (id, { text }) => { //update the cart items
  if (!carts.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const cart = {
    id,
    text,
    postedDate: new Date(),
  };
  carts.set(cart.id, cart);
  return cart;
};

export const deleteCart = (id) => { //delete cart items
  if (!carts.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  carts.delete(id);
};
