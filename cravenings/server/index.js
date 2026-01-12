import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectdb from "./src/config/db.js";
import cors from "cors";
import morgan from "morgan";
import AuthRouter from "./src/routers/authrouter.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);

app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "server is running" });
});

app.use((err, res, req, next) => {
  const errormessage = err.message || "Internal Server Error";
  const statuscode = err.statuscode || 500;

  res.status(statuscode).json({ message: errormessage });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port ", port);
  connectdb();
});
