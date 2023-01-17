import express from "express";
import VehicleController from "../controllers/vehiclesController.js";

const router = express.Router()

router
  .get('/api/v1/vehicles', VehicleController.listVehicles)
  .get('/api/v1/vehicles/type', VehicleController.listVehiclesByType)
  .get('/api/v1/vehicles/:id', VehicleController.listVehiclesById)
  .post('/api/v1/vehicles', VehicleController.createVehicles)
  .put('/api/v1/vehicles/:id', VehicleController.updateVehicles)
  .delete('/api/v1/vehicles/:id', VehicleController.deleteVehicles)


export default router
