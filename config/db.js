const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://abc:click123$@cluster0.wjfep.mongodb.net/PT?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
  }
};

module.exports = connectDB;
