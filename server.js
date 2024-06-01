// 9toZMwxUBwtb8YY9
// mongodb+srv://Nik:<password>@cluster0.rj2x8xl.mongodb.net/

import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOST, PORT } = process.env;
console.log(DB_HOST)
mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
      console.log(`Server runing on ${PORT} PORT`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });