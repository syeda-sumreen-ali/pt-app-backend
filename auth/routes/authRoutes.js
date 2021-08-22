const express = require("express");
const router = express.Router();

const { login } = require("../controllers/authController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect).get(protect);
router.route("/login").post(protect).post(login);

module.exports = router;
