"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_controler_1 = __importDefault(require("../controllers/data-controler"));
const index_1 = require("../middlewares/index");
const dataRouter = express_1.default.Router();
dataRouter.get("/", data_controler_1.default.getCustomers);
dataRouter.get('/customer', index_1.cancelPreviousRequest, data_controler_1.default.getCustomer);
exports.default = dataRouter;
