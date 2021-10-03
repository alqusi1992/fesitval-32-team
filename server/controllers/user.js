import bcrypt from "bcryptjs";
import User from "../models/user.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res
        .status(404)
        .json({ success: false, msg: "Account doesn't exist" });
    }
    const correctPassword = bcrypt.compare(password, existedUser.password);
    if (!correctPassword) {
      return res
        .status(400)
        .json({ success: false, msg: "Invalid credentials" });
    }

    const { _id, first_name, last_name, email } = existedUser;
    const phone = existedUser?.phone ? existedUser.phone : "";
    res.status(200).json({ success: true, result: existedUser });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, msg: "Something went wrong, try later please" });
    console.log(error);
  }
};

export { login };
