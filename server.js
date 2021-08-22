const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 4000;
const authRoutes = require("./auth/routes/authRoutes");

console.log(authRoutes);

connectDB();

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
