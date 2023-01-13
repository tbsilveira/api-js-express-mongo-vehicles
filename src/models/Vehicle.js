import mongoose from "mongoose";

const vehicleSchema = new mongoose.Schema(
  {
    id: {type: String},
    isDeleted: {type: Boolean, defaults: false},
    vehicleType: {type: String, required: true},
    brandName: {type: String, required: true},
    modelName: {type: String, required: true},
    modelYear: {type: Number, required: true},
    overallCondition: {type: String, required: true},
    usageKm: {type: Number, required: false},
    fuelType: {type: String, required: true},
    gearType: {type: String, required: true},
    mainColor: {type: String, required: false}
  }
)

const vehicles = mongoose.model("vehicles", vehicleSchema)

export default vehicles

