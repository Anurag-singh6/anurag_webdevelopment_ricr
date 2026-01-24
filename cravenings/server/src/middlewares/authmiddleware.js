import jwt from "jsonwebtoken";
import User from "../models/usermodel.js";

export const protect = async (req, res, next) => {
  try {
    const biscut = req.cookies.parleG;
    console.log("Token recevied in cookies : ", biscut);

    const chai = jwt.verify(biscut, process.env.JWT_SECRET);
    console.log(chai);
    if (!chai) {
      const error = new Error("Unauthorized! Login again");
      error.statuscode = 401;
      return next(error);
    }
    const verfieduser = await User.findById(chai.id);
    if (!verfieduser) {
      const error = new Error("Unauthorized Login again");
      error.statuscode = 401;
      return next(error);
    }

    req.user = verfieduser;

    next();
  } catch (error) {
    next(error);
  }
};
