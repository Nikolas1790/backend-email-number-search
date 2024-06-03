import express from "express";
import dataControler from "../controllers/data-controler";
import {cancelPreviousRequest} from "../middlewares/index";
import validateBody from "../decorators/validateBody";
import { customerJoiSchema } from "../models/Customers";

const dataRouter = express.Router();

dataRouter.get("/", dataControler.getCustomers);
dataRouter.post("/customer", validateBody(customerJoiSchema), cancelPreviousRequest, dataControler.postCustomer);

export default dataRouter;