import dotenv from "dotenv";
dotenv.config(); // loads file contents of env
import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("server is running");
  res.json({ message: "server is running" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("server started at port ", port);
});
