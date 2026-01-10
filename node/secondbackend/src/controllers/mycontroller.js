import User from "../models/usermodel.js";
export const UserRegister = async (req, res, next) => {
  try {
    const { fullName, email, phone, password } = req.body;

    if (!fullName || !email || !phone || !password) {
      // res.status(400).json({ message: "All Fields Required" }); // port error http
      const error = new Error("All Fields Required");
      error.statuscode = 400;
      return next(error);
    }

    const NewUser = await User.create({
      fullName,
      email,
      phone,
      password,
    });

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
      error.statuscode = 400; // port error http
      return next(error);
    }

    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      //res.status(404).json({ message: "User not found" });
      const error = new Error("User not found");
      error.statuscode = 404;
      return next(error);
    }
    const isverfiy = password === existinguser.password;
    if (!isverfiy) {
      //res.status(402).json({ message: "User not authorized" });
      const error = new Error("User Not Authorized");
      error.statuscode = 402;
      return next(error);
    }

    console.log(existinguser);
    res.status(200).json({ message: "Welcome Back", data: existinguser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserLogout = async (req, res, next) => {
  try {
    res.status(200).json({ message: "Logout Successfull" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const UserUpdate = async (req, res, next) => {
  try {
    const { fullName, email, phone } = req.body;
    if (!fullName || !email || !phone) {
      const error = new Error("All Fields Required");
      error.statuscode = 400; // port error http
      return next(error);
    }

    const existinguser = await User.findOne({ email });
    if (!existinguser) {
      const error = new Error("User Not Found");
      error.statuscode = 404;
      return next(error);
    }
    existinguser.fullName = fullName; //frontend
    existinguser.phone = phone;

    await existinguser.save();
    res
      .status(200)
      .json({ message: "User update succefully", data: existinguser });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
