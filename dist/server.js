"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
const { DB_HOST, PORT } = process.env;
if (!DB_HOST) {
    console.error('DB_HOST is not defined in environment variables');
    process.exit(1);
}
mongoose_1.default.connect(DB_HOST)
    .then(() => {
    app_1.default.listen(PORT, () => {
        console.log("Database connection successful");
        console.log(`Server runing on ${PORT} PORT`);
    });
})
    .catch((error) => {
    console.log(error.message);
    process.exit(1);
});
