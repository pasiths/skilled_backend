const errorHandler = (err, req, res, next) => {
  console.error(err.message);
  return res.status(500).json({ message: "Internal server error" });
};

export default errorHandler;
