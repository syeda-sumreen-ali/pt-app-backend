const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  console.log("middle ware-----");

  next();
});

module.exports = { protect };
