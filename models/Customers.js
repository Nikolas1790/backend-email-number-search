import { Schema, model } from "mongoose";

const emailShema= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const customerSchema = new Schema({
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

const Customer = model("contacts", customerSchema);
export default Customer;