import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import vehicles from "./models/Vehicle.js";


db.on("error", console.log.bind(console, 'Connection error'))
db.once("open", () => {
  console.log('Database connection successful')
})

const app = express()
app.use(express.json())
routes(app)


export default app
