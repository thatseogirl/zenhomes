import express from "express"
import dotenv from "dotenv"
import db from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import cors from "cors"
import path from "path"
import mongodb from "mongodb"
const app = express()
app.use(express.json())
app.use(cors())
dotenv.config()
db()

app.use("/api/users", userRoutes)
app.listen(process.env.PORT, () => {
  console.log("server is running")
})
