"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let previousRequest;
const cancelPreviousRequest = (req, res, next) => {
    if (previousRequest) {
        clearTimeout(previousRequest);
    }
    previousRequest = setTimeout(() => {
        previousRequest = null;
    }, 0);
    next();
};
exports.default = cancelPreviousRequest;
