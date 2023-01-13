import mongoose from "mongoose";

mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://tiago_vehicles:1a2b3c@vehicles.drztce3.mongodb.net/db_vehicles")

let db = mongoose.connection

export default db

