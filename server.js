const express = require("express");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 4000;
const authRoutes = require("./auth/routes/authRoutes");

connectDB();

const app = express();

require("./models/userModel");

app.use(express.json());
app.use("/", authRoutes);

app.listen(PORT, console.log(`Server running in mode on port ${PORT}`));
