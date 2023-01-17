import mongoose from "mongoose";

const brandSchema = new mongoose.Schema(
  {
    id: {type: String},
    isDeleted: {type: Boolean, defaults: false},
    brandName: {type: String, required: true},
    originCountry: {type: String, required: true},
    originCity: {type: String}
  }
)

const brands = mongoose.model("brands", brandSchema)

export default brands