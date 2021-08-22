import morgan from "morgan"
import express from "express"
import path from "path"
import dotenv from "dotenv"
import connectDB  from "./config/db"

dotenv.config()

connectDB();

const app = express();

if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"));
}

app.use(express.json())

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);