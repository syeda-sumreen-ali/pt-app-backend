const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const trainerSchema = mongoose.Schema({
  userId: {
    type: ObjectId, //this is id of user
    ref: "User",
  },
});

mongoose.model("Trainer", userSchema);
