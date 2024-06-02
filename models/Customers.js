import { Schema, model } from "mongoose";

const customerSchema = new Schema({
  email: { 
    type: String,
     required: true
    }, 
  phone: { 
    type: String,
    required: true,
    match: [/^\d{6}$/, "Phone number must be a 6-digit number."],
  }, 
}, { versionKey: false, timestamps: false }); 

const Customer = model("contacts", customerSchema);
export default Customer;