export const comparePassword = async (bcrypt, password, existedUser) => {
  const correctPassword = await bcrypt.compare(password, existedUser.password);
  return correctPassword;
};
