"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../middlewares/index");
// This hellpers validate body according to the scheme
const validateBody = (schema) => {
    const func = (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return next((0, index_1.HttpError)(400, error.message));
        }
        next();
    };
    return func;
};
exports.default = validateBody;
