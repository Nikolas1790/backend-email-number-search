
import mongoose from "mongoose";
import app from "./app.js";

const { DB_HOST, PORT } = process.env;
// console.log()
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