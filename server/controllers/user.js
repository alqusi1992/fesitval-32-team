import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

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
      existedUser.password,
    );
    if (!correctPassword) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }
    const { _id, firstName, lastName } = existedUser;
    const phone = existedUser?.phone ? existedUser.phone : '';
    const result = {
      _id,
      firstName,
      lastName,
      email,
      phone,
    };
    const token = jwt.sign({ email, id: _id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({ success: true, result, token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong, try again later please',
    });
  }
};

export const register = async (req, res) => {
  const {
    email, password, firstName, lastName, phone,
  } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (existedUser) {
      return res
        .status(400)
        .json({ success: false, msg: 'Account already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      firstName,
      lastName,
      phone,
    });
    const { _id } = result;
    const token = jwt.sign({ email, id: _id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    return res.status(200).json({
      success: true,
      result: {
        _id,
        firstName,
        lastName,
        email,
        phone,
      },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      msg: 'Something went wrong, try again later please',
    });
  }
};
