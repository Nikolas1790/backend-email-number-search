import express from "express";
import dataControler from "../controllers/data-controler";
import {cancelPreviousRequest} from "../middlewares/index";

const dataRouter = express.Router();

dataRouter.get("/", dataControler.getCustomers);
dataRouter.post("/customer", cancelPreviousRequest, dataControler.postCustomer);

export default dataRouter;