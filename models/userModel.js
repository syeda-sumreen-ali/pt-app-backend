const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: Number,
    require: true,
    default: 3,
  },
});

mongoose.model("User", userSchema);
