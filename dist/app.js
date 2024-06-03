"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const data_routers_1 = __importDefault(require("./routes/data-routers"));
const app = (0, express_1.default)();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use((0, morgan_1.default)(formatsLogger));
app.use((0, cors_1.default)());
app.use("/api/contacts", data_routers_1.default);
app.use((req, res) => {
    res.status(404).json({ message: "Not found path" });
});
app.use((err, req, res, next) => {
    var _a;
    console.log(err);
    res.status((_a = err.status) !== null && _a !== void 0 ? _a : 500).json({ message: err.message });
});
exports.default = app;
