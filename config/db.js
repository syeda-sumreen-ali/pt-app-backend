import mongoose from "mongoose"
require('dotenv').config({path:'./config/.env'})

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.DB_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error:${error.message}`)
    }
}

export default connectDB;