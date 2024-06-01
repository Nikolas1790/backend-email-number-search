import ctrlWrapper from "../decorators/ctrlWrapper.js";
import  Customer  from "../models/Customers.js ";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCustomers = async (req, res) => {
  const result = await Customer.find();
  res.json(result);
};

const getCustomerInf = async (req, res) => {
  await delay(10000);
  const { customerId } = req.params;
  const customer = await Customer.findById(customerId);
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
};

export default {
  getCustomers: ctrlWrapper(getCustomers),
  getCustomerInf: ctrlWrapper(getCustomerInf), 
};