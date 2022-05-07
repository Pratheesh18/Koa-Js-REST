import { randomBytes } from "crypto";

const offers = new Map();

export const createPromo = ({ //Creating the promos
  promoName,
  description,
  item,
  promoOff,
}) => {
  const offer = {
    id: randomBytes(16).toString("hex"),
    promoName,
    description,
    item,
    promoOff,
    postedDate: new Date(),
  };
  offers.set(offer.id, offer);
  return offer;
};

export const getPromo = (id) => { //getting the promos
  const offer = offers.get(id);
  if (!offer) {
    throw new Error(`Not founded ${id}`);
  }
  return offer;
};

export const getAllPromos = () => { //getting all the promos
  return [...offers.values()];
};

export const updatePromo = ( //update the promos
  id,
  { promoName, description, item, promoOff }
) => {
  if (!offers.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  const offer = {
    id,
    promoName, 
    description,
    item,
    promoOff,
    postedDate: new Date(),
  };
  offers.set(offer.id, offer);
  return offer;
};

export const deletePromo = (id) => { //delete the promos
  if (!offers.has(id)) {
    throw new Error(`Not founded ${id}`);
  }
  offers.delete(id);
};
