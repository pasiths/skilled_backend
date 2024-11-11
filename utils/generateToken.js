import jwt from "jsonwebtoken";

const generateToken = (data, res) => {
  const payload = {
    id: data.id,
    userType: data.userType,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "5d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    maxAge: 5 * 24 * 60 * 60 * 1000, // 5 days
    sameSite: "strict",
    secure: process.env.NODE_ENV === "development",
  });

  return token;
};

export default generateToken;
