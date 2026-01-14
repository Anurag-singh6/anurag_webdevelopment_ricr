import User from "../models/usermodel.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res, next) => {
  try {
    const { fullname, email, mobileno, password } = req.body;

    if (!fullname || !email || !mobileno || !password) {
      const error = new Error("All Fields Required");
      error.statuscode = 400;
      return next(error);
    }

    const existinguser = await User.findOne({ email });
    if (existinguser) {
      const error = new Error("Email Already registered");
      error.statuscode = 409;
      return next(error);
    }

    //encrpt password
    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);

    //save data to packets

    const NewUser = await User.create({
      fullname,
      email,
      mobileno,
      password: hashpassword,
    });

    //send response to fontend

    console.log(NewUser);

    res.status(201).json({ message: "user created successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statuscode = 400;
      return next(error);
    }

    //check user registed or not
    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      const error = new Error("Email not registered");
      error.statuscode = 401;
      return next(error);
    }

    //password verfiy

    const isverfiy = await bcrypt.compare(password, existinguser.password);
    if (!isverfiy) {
      const error = new Error("User Not Authorized");
      error.statuscode = 401;
      return next(error);
    }

    //send message to frontend
    res.status(200).json({ message: "Login Successfully", data: existinguser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfully" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
