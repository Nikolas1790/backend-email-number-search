import ctrlWrapper from "../decorators/ctrlWrapper.js";
import  Customer  from "../models/Customers.js ";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getCustomers = async (req, res) => {
  const result = await Customer.find();
  console.log("jjjjjjjjjjjjjjjjj")
  res.json(result);
};

const getCustomerInf = async (req, res) => {
  await delay(50000);
  const { customerId } = req.params;
  console.log("ddddddddddddddddddddddddd", customerId)
  const customer = await Customer.findById(customerId);
  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }
  res.json(customer);
};

const getCustomer = async (req, res) => {
  await delay(5000); 
  const { email } = req.query;
  const query = {};
  if (email) query.email = email;

  console.log("ssssssssssssssssssssssssssss", email)

  const result = await Customer.find(query);
  res.json(result);
};
export default {
  getCustomers: ctrlWrapper(getCustomers),
  getCustomerInf: ctrlWrapper(getCustomerInf), 
  getCustomer: ctrlWrapper(getCustomer),
};