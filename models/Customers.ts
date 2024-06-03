import { Schema, model, Document } from "mongoose";
import Joi from "joi";

interface ICustomer extends Document {
  email: string;
  phone?: string;
}

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

const Customer = model<ICustomer>("contacts", customerSchema);
export default Customer;

export const customerJoiSchema = Joi.object({
  email: Joi.string().pattern(emailShema).required(),
  phone: Joi.string().pattern(/^\d{6}$/),
});