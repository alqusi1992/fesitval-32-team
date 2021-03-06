import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import { comparePassword } from '../utils/helper.js';
import sendEmail from '../utils/sendEmail.js';
import sendEmailSandGrid from '../utils/sendEmailSandGrid.js';

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res
        .status(404)
        .json({ success: false, msg: "Account doesn't exist" });
    }
    const correctPassword = await comparePassword(password, existedUser);
    if (!correctPassword) {
      return res
        .status(400)
        .json({ success: false, msg: 'Invalid credentials' });
    }
    const {
      _id, firstName, lastName, isVerified,
    } = existedUser;
    const phone = existedUser?.phone ? existedUser.phone : '';
    const result = {
      _id,
      firstName,
      lastName,
      email,
      phone,
      isVerified,
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
    const { _id, isVerified } = result;
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
        isVerified,
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

export const deleteAccount = async (req, res) => {
  try {
    const { password } = req.body;
    const { userId } = req;
    const existedUser = await User.findById(userId);
    if (!existedUser) {
      return res.status(404).json({ success: false, msg: 'User not found' });
    }
    const correctPassword = await comparePassword(password, existedUser);
    if (!correctPassword) {
      return res.status(400).json({ success: false, msg: 'Wrong password' });
    }
    await User.findByIdAndDelete(userId);
    return res.json({ success: true, msg: 'user is deleted' });
  } catch (err) {
    return res.status(500).json({ success: false, msg: 'Server error' });
  }
};

export const updateAccount = async (req, res) => {
  try {
    const {
      firstName, lastName, email, newPassword, phone, currentPassword,
    } = req.body;
    const { userId } = req;
    const existedUser = await User.findById(userId);
    const correctPassword = await comparePassword(currentPassword, existedUser);
    if (!correctPassword) {
      return res.status(400).json({ success: false, msg: 'Wrong password' });
    }
    const updatedUser = {
      firstName: firstName || existedUser.firstName,
      lastName: lastName || existedUser.lastName,
      email: email || existedUser.email,
      password: newPassword
        ? await bcrypt.hash(newPassword, 12)
        : existedUser.password,
      phone: phone || existedUser.phone,
    };

    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updatedUser },
      { new: true },
    );

    return res.status(200).json({
      success: true,
      result: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    return res.status(500).json({ success: false, msg: 'Server Error' });
  }
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      res.status(404).json({
        success: false,
        msg: 'Account with this email does not exist',
      });
    } else {
      const token = jwt.sign(
        { _id: existedUser.id },
        process.env.JWT_SECRET_FORGET,
        { expiresIn: '1h' },
      );
      await existedUser.updateOne({ token });
      const html = `<p>Hello ${existedUser.firstName},<br>
      Please click <a href = ${process.env.CLIENT_URL}/user/reset-password/${token}>here<a> to reset your password. This link can be used once within one hour.</p>`;
      await sendEmailSandGrid(email, 'Reset Password', html);
      return res.status(200).json({ success: true, msg: 'sent successfully' });
    }
    return existedUser;
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: 'Something went wrong' });
  }
};

export const resetPassword = async (req, res) => {
  const { token, newPass } = req.body;
  const hashedPassword = await bcrypt.hash(newPass, 12);
  try {
    const existedUser = await User.findOne({ token });
    if (!existedUser) {
      return res
        .status(400)
        .json({ success: false, msg: 'Expired or invalid token' });
    }
    const samePassword = await comparePassword(newPass, existedUser);
    if (samePassword) {
      return res
        .status(400)
        .json({ success: false, msg: 'Failed ! Please enter a new password' });
    }

    await existedUser.updateOne({ password: hashedPassword, token: '' });
    return res
      .status(200)
      .json({ success: true, msg: 'Password successfully updated' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, msg: 'Something went wrong' });
  }
};

export const testEmail = async (req, res) => {
  const to = 'yahya.ganjo@gmail.com';
  const subject = 'Test';
  const html = '<h1>Hey There</h1>';
  try {
    const result = await sendEmail(to, subject, html);
    console.log(result);
    res.status(200).json({ success: true, msg: 'sent successfully' });
  } catch (error) {
    res.status(500).json({ success: false, msg: 'Something went wrong' });
  }
};
