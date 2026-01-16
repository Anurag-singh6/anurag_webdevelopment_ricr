import Contact from "../models/contactmodel.js";

export const UserContact = async (req, res, next) => {
  try {
    const { fullname, email, mobileno, message } = req.body;

    if (!fullname || !email || !mobileno || !message) {
      const error = new Error("All Fields Required");
      error.statuscode = 400;
      return next(error);
    }

    const NewUser = await Contact.create({
      fullname,
      email,
      mobileno,
      message,
    });

    console.log(NewUser);

    res.status(201).json({ message: "Thanks for Contacting us...!" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
