import ctrlWrapper from "../decorators/ctrlWrapper.js";
import  Customer  from "../models/Customers";
import  { Request, Response }  from "express";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getCustomers = async (req: Request, res: Response,) => {
  const result = await Customer.find();
  res.json(result);
};

const getCustomer = async (req: Request, res: Response,) => {
  await delay(5000); 
  const { email } = req.query;
  const emailString = typeof email === 'string' ? email : '';
  const query =  { email: emailString };
  if (email) query.email = email.toString();

  const result = await Customer.find(query);
  res.json(result);
};

export default {
  getCustomers: ctrlWrapper(getCustomers),
  getCustomer: ctrlWrapper(getCustomer),
};