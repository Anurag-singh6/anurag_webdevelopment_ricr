import dotenv from "dotenv";
dotenv.config(); // loads file contents of env(secret)
import express from "express";
import connectdb from "./src/config/db.js";
import AuthRouter from "./src/routers/myrouter.js";

const app = express();

app.use(express.json()); //readable form covert request in fetch

app.use("/auth", AuthRouter); //authentication of login

app.get("/", (req, res) => {
  console.log("server is running");
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
