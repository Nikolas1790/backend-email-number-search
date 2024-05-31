import ctrlWrapper from "../decorators/ctrlWrapper.js";

const getMunthDashboard = async (req, res) => {
  res.json({
    message: "Hello, this is a simple task!",
  });
};


export default {
  getMunthDashboard: ctrlWrapper(getMunthDashboard),
};