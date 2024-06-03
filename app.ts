import express, { Request, Response, NextFunction, json }  from "express";
import "dotenv/config";
import logger from "morgan";
import cors from "cors";

import dataRouter from "./routes/data-routers";

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));
app.use(cors());
app.use(json());
app.use("/api/contacts", dataRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found path" });
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.status(err.status ?? 500).json({ message: err.message });
});

export default app;