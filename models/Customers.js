import { Schema, model } from "mongoose";
// import Joi from "joi";

// сохр в базе
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


// export const customerJoiSchema = Joi.object({
//   name: Joi.string().required(),
//   phone: Joi.number().required()
// });