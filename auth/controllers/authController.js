const asyncHandler = require("express-async-handler");

const login = asyncHandler(async (req, res) => {
  console.log("login");

  return res.json({ success: 200 });
});

module.exports = { login };
