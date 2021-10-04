import bcrypt from "bcryptjs";
import User from "../models/User.js";

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res
        .status(404)
        .json({ success: false, msg: "Account doesn't exist" });
    }
    const correctPassword = await bcrypt.compare(
      password,
      existedUser.password
    );
    if (!correctPassword) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid credentials" });
    }

    const { _id, first_name, last_name } = existedUser;
    const phone = existedUser?.phone ? existedUser.phone : "";
    const result = { _id, first_name, last_name, email, phone };
    res.status(200).json({ success: true, result });
  } catch (error) {
    res.status(500).json({
      success: false,
      msg: "Something went wrong, try again later please",
    });
    console.log(error);
  }
};

export const register = async (req, res) => {
  const { email, password, first_name, last_name, phone } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, msg: "Account already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      first_name,
      last_name,
      phone,
    });
    res.status(200).json({ success: true, result });
  } catch (err) {
    res.status(500).json({
      success: false,
      msg: "Something went wrong, try again later please",
    });
    console.log(err);
  }
};
