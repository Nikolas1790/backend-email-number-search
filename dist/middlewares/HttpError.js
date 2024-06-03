"use strict";
// This function return error.code and error status
Object.defineProperty(exports, "__esModule", { value: true });
const HttpError = (status, message) => {
    const error = new Error(message);
    error.status = status;
    return error;
};
exports.default = HttpError;
