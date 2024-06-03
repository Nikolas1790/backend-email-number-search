import mongoose from "mongoose";
import app from "./app";

const { DB_HOST, PORT } = process.env;

if (!DB_HOST) {
  console.error('DB_HOST is not defined in environment variables');
  process.exit(1);
}

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