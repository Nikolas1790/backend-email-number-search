import express from "express";
import dataControler from "../controllers/data-controler.js";
import {cancelPreviousRequest, isValidId} from "../middlewares/index.js";

const dataRouter = express.Router();

dataRouter.get("/", dataControler.getCustomers);
dataRouter.get('/customer', dataControler.getCustomer);
dataRouter.get("/:customerId", isValidId, cancelPreviousRequest, dataControler.getCustomerInf);

export default dataRouter;