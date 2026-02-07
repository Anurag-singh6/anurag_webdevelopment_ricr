import express from "express";
import connectdb from "./src/config/db.js";
import cors from "cors";
import cloudinary from "./src/config/cloudinary.js";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import AuthRouter from "./src/routers/authrouter.js";
import PublicRouter from "./src/routers/publicrouter.js";
import UserRouter from "./src/routers/UserRouter.js";
import RestaurantRouter from "./src/routers/restaurantRouter.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use("/auth", AuthRouter);
app.use("/public", PublicRouter);
app.use("/user", UserRouter);
app.use("/restaurant", RestaurantRouter);

app.get("/", (req, res) => {
  console.log("Server is running");
  res.json({ message: "server is running" });
});

app.use((err, req, res, next) => {
  const errormessage = err.message || "Internal Server Error";
  const statuscode = err.statuscode || 500;

  res.status(statuscode).json({ message: errormessage });
});

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  console.log("server started at port ", port);
  connectdb();
  try {
    const res = await cloudinary.api.ping();
    console.log("Cloudinary api is working ", res);
  } catch (error) {
    console.error("Error in connecting cloudinary api ", error);
  }
});
