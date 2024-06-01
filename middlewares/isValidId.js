import { isValidObjectId } from "mongoose";
import { HttpError } from "../decorators/index.js";

const isValidId = (req, res, next) => {
  const { customerId } = req.params;
  if (!isValidObjectId(customerId)) {
    return next(HttpError(404, `${customerId} is not valid id`));
  }
  next();
};

export default isValidId;