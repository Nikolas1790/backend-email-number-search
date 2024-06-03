"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ctrlWrapper_js_1 = __importDefault(require("../decorators/ctrlWrapper.js"));
const Customers_1 = __importDefault(require("../models/Customers"));
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const getCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Customers_1.default.find();
    res.json(result);
});
const getCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(5000);
    const { email } = req.query;
    const emailString = typeof email === 'string' ? email : '';
    const query = { email: emailString };
    if (email)
        query.email = email.toString();
    const result = yield Customers_1.default.find(query);
    res.json(result);
});
exports.default = {
    getCustomers: (0, ctrlWrapper_js_1.default)(getCustomers),
    getCustomer: (0, ctrlWrapper_js_1.default)(getCustomer),
};
