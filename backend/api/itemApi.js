import { randomBytes } from "crypto";

const items = new Map();

export const createItems = ({  //creating items
  itemName,
  description,
  quantity,
  price,
}) => {
  const item = {
    id: randomBytes(16).toString("hex"),
    itemName,
    description,
    quantity,
    price,
    postedDate: new Date(),
    
  };
  items.set(item.id, item);
  return item;
};

export const getItem = (id) => {  //getting items
  const item = items.get(id);
  if (!item) {
    throw new Error(`Not founded ${id}`);
  }
  return item;
};

export const getAllItems = () => { //getting all the items
  return [...items.values()];
};

export const updateItems = (   //update the items
  id,
  { itemName, description, quantity, price }
) => {
  if (!items.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const item = {
    id,
    itemName,
    description,
    quantity,
    price,
    postedDate: new Date(),
  };
  items.set(item.id, item);
  return item;
};

export const deleteItems = (id) => { //delete the items
  if (!items.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  items.delete(id);
};
