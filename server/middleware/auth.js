import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedData = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decodedData.id;
    req.userEmail = decodedData.email;
    next();
  } catch (error) {
    res
      .status(401)
      .json({ success: false, msg: 'Something wrong with your authorization' });
  }
};

export default auth;
