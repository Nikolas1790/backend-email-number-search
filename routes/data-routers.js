import express from "express";
import dataControler from "../controllers/data-controler.js";

const dataRouter = express.Router();

dataRouter.get("/",  dataControler.getMunthDashboard);


export default dataRouter;