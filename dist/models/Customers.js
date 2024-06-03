"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerJoiSchema = void 0;
const mongoose_1 = require("mongoose");
const joi_1 = __importDefault(require("joi"));
const emailShema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const customerSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        match: [emailShema, "Invalid email format"],
    },
    phone: {
        type: String,
        match: [/^\d{6}$/, "Phone number must be a 6-digit number."],
    },
}, { versionKey: false, timestamps: false });
const Customer = (0, mongoose_1.model)("contacts", customerSchema);
exports.default = Customer;
exports.customerJoiSchema = joi_1.default.object({
    email: joi_1.default.string().pattern(emailShema).required(),
    phone: joi_1.default.string().pattern(/^\d{6}$/),
});
