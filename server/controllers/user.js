const login = async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {}
};

export { login };
