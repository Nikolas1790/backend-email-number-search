import { Schema, model } from "mongoose";
 
const customerSchema = new Schema({
  email: { type: String, required: true }, 
  phone: { type: String, required: true }, 
}, { versionKey: false, timestamps: false }); 

const Customer = model("Customer", customerSchema);
export default Customer;
