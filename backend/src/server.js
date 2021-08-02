import cors from "cors";
import express from "express";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import { connect } from "./database/database";
import eventRouter from "./resources/event/event-router";

export const app = express();

app.disable("x-powered-by");

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("/api/event", eventRouter);

export const start = async () => {
  try {
    await connect();
    app.listen(5000, () => {
      console.log(`Server listens on http://localhost:5000/api`);
    });
  } catch (error) {
    console.error(error.code);
  }
};
