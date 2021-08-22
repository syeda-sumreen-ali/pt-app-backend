const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res) => {
  console.log("req--->", req.body);
});

module.exports = { login };
