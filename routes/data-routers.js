import express from "express";
import dataControler from "../controllers/data-controler.js";
import {cancelPreviousRequest} from "../middlewares/index.js";

const dataRouter = express.Router();

dataRouter.get("/", dataControler.getCustomers);
dataRouter.get('/customer',cancelPreviousRequest, dataControler.getCustomer);

export default dataRouter;