import ctrlWrapper from "../decorators/ctrlWrapper.js";
import  Customer  from "../models/Customers.js ";

const getCustomers = async (req, res) => {
  const result = await Customer.find();
  // console.log(result);
  res.json({
    message: "Hello, this is a simple task!",
  });
};

const getCustomerInf = async (req, res) => {
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