import User from "../models/usermodel.js";
import cloudinary from "../config/cloudinary.js";
import bcrypt from "bcrypt";

export const UserUpdate = async (req, res, next) => {
  try {
    //logic{{
    const {
      fullname,
      email,
      mobileno,
      gender,
      dob,
      address,
      city,
      pin,
      geoLocation,
      documents,
      paymentDetails,
    } = req.body;
    const currentuser = req.user;

    if (
      !fullname ||
      !email ||
      !mobileno ||
      !gender ||
      !dob ||
      !address ||
      !city ||
      !pin ||
      !geoLocation ||
      !documents ||
      !paymentDetails
    ) {
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
        gender,
        dob,
        address,
        city,
        geoLocation,
        documents,
        paymentDetails,
      },
      { new: true }
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

export const UserChangePhoto = async (req, res, next) => {
  try {
    //console.log("body: ", req.body);

    const currentuser = req.user;
    const dp = req.file;
    console.log("file: ", req.file);

    if (!dp) {
      const error = new Error("Profile Picture Required");
      error.statuscode(400);
      return next(error);
    }

    if (currentuser.photo.publicID) {
      //delete the old photo from cloudinary
      await cloudinary.uploader.destroy(currentuser.photo.publicID);
    }

    //upload the photo from cloudinary
    const b64 = Buffer.from(dp.buffer).toString("base64");
    console.log(b64.slice(0, 100));
    const dataURI = `data:${dp.mimetype};base64,${b64}`;
    console.log("data", dataURI.slice(0, 100));

    const result = await cloudinary.uploader.upload(dataURI, {
      folder: "Cravings/User",
      width: 500,
      height: 500,
      crop: "fill",
    });

    console.log("Image uploaded successfully ", result);
    currentuser.photo.url = result.secure_url;
    currentuser.photo.publicID = result.public_id;

    await currentuser.save();

    res.status(200).json({ message: "Photo Updated", data: currentuser });
  } catch (error) {
    next(error);
  }
};

export const UserResetPassword = async (req, res, next) => {
  try {
    const { oldpassword, newpassword } = req.body;
    const currentuser = req.user;

    if (!oldpassword || !newpassword) {
      const error = new Error("All feilds required");
      error.statuscode = 400;
      return next(error);
    }

    const isverified = await bcrypt.compare(oldpassword, currentuser.password);
    if (!isverified) {
      const error = new Error("Old Password didn't match");
      error.statuscode = 401;
      return next(error);
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(newpassword, salt);

    currentuser.password = hashpassword;

    await currentuser.save();

    res.status(200).json({ message: "Password Reset Successfull" });
  } catch (error) {
    next(error);
  }
};
