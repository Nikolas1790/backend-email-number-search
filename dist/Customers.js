"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
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
