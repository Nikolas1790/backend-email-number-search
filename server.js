// 9toZMwxUBwtb8YY9
// mongodb+srv://Nik:<password>@cluster0.rj2x8xl.mongodb.net/

// mongodb+srv://Nik:9toZMwxUBwtb8YY9@cluster0.rj2x8xl.mongodb.net/my-contacts?retryWrites=true&w=majority&appName=Cluster0


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





// import express from "express";



// const app = express();

// app.listen(4000, () => console.log("hello world"))