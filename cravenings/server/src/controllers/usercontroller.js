import User from "../models/usermodel.js";

export const UserUpdate = async (req, res, next) => {
  try {
    //logic
    const { fullname, email, mobileno } = req.body;
    const currentuser = req.user;

    if (!fullname || !email || !mobileno) {
      const error = new Error("All fields required");
      error.statuscode = 400;
      return next(error);
    }
    console.log("Old Data", currentuser); //json format
    //first way
    // currentuser.fullname = fullname;
    // currentuser.email = email;
    // currentuser.mobileno = mobileno;
    // await currentuser.save();

    // console.log("New Data", currentuser);

    //second way
    const updateuser = await User.findByIdAndUpdate(
      { _id: currentuser._id },
      {
        fullname,
        email,
        mobileno,
      },
      { new: true },
    );
    console.log("Update User: ", updateuser);

    res
      .status(200)
      .json({ message: "user update successfull", data: updateuser });
    console.log("Updating the user");
  } catch (error) {
    next(error);
  }
};
