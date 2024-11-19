const errorHandler = (err, req, res, next) => {
  const errStatus = err.StatusCode || 500;
  const errmsg = err.message || "Oops! Something went wrong.";
  res.status(errStatus).json({
    success: false,
    status: errStatus,
    message: errmsg,
  });
};

module.exports = { errorHandler };
