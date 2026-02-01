import mongoose from "mongoose";

const otpsend = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
    expires: 300,
  },
});

const OTP = mongoose.model("OTP", otpsend);
export default OTP;
