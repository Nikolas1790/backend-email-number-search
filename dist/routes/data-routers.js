"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_controler_1 = __importDefault(require("../controllers/data-controler"));
const index_1 = require("../middlewares/index");
const validateBody_1 = __importDefault(require("../decorators/validateBody"));
const Customers_1 = require("../models/Customers");
const dataRouter = express_1.default.Router();
dataRouter.get("/", data_controler_1.default.getCustomers);
dataRouter.post("/customer", (0, validateBody_1.default)(Customers_1.customerJoiSchema), index_1.cancelPreviousRequest, data_controler_1.default.postCustomer);
exports.default = dataRouter;
