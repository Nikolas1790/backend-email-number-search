import Joi from "joi";
import { HttpError } from "../middlewares/index";
import { Request, Response, NextFunction }  from "express";

// This hellpers validate body according to the scheme
const validateBody = (schema: Joi.ObjectSchema) => {
  const func = (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

export default validateBody;
