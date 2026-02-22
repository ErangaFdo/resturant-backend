import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";





dotenv.config();
const SERVER_PORT = Number(process.env.SERVER_PORT) || 5000
const MONGO_URI = process.env.MONGO_URI as string


const app = express();
app.use(express.json());

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DB connected Successful")
  })
  .catch((err) => {
    console.error(`DB connection fail: ${err}`)
    process.exit(1)
  })


app.listen(SERVER_PORT,()=>{
    console.log(`Server is running on port ${SERVER_PORT}`)
})