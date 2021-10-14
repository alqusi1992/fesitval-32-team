import bcrypt from 'bcryptjs';

export const comparePassword = async (password, existedUser) => {
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  return correctPassword;
};
