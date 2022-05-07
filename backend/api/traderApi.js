import { randomBytes } from "crypto";

const traderprofiles = new Map();

export const createTrader = ({ //creating the traders
  firstname,
  lastname,
  username,
  email,
  phonenumber,
  password,
}) => {
  const traderprofile = {
    id: randomBytes(16).toString("hex"),
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    createdDate: new Date(),
  };
  traderprofiles.set(traderprofile.id, traderprofile);
  return traderprofile;
};

export const getTrader = (id) => { //getiing the traders
  const traderprofile = traderprofiles.get(id);
  if (!traderprofile) {
    throw new Error(`Not found for the ID ${id}`);
  }
  return traderprofile;
};

export const getAllTraders = () => { //getting all the traders
  return [...traderprofiles.values()];
};

export const updateTrader = ( //update the traders
  id,
  { firstname, lastname, username, email, phonenumber, password }
) => {
  if (!traderprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  const traderprofile = {
    id,
    firstname,
    lastname,
    username,
    email,
    phonenumber,
    password,
    postedDate: new Date(),
  };
  traderprofiles.set(traderprofile.id, traderprofile);
  return traderprofile;
};

export const deleteTrader = (id) => { //deleting the traders
  if (!traderprofiles.has(id)) {
    throw new Error(`Not found for the ID ${id}`);
  }
  traderprofiles.delete(id);
};
