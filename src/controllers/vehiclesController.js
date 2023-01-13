import vehicles from "../models/Vehicle.js";

class VehicleController {

  static listVehicles = (req, res) => {
    vehicles.find()
      .where({ isDeleted: false })
      .select({ isDeleted: 0 })
      .exec((err, vehicles) => {
        if(!err) {
          res.status(200).json(vehicles)  
        } else {
          res.status(400).send({message: `${err.message}`})
        }
      })
  }

  static listVehiclesById = (req, res) => {
    const {id} = req.params
    vehicles.findById(id)
      .where({ isDeleted: false })
      .select({ isDeleted: 0 })
      .exec((err, vehicles) => {
        if (!err) {
          res.status(200).send(vehicles)
        } else {
          res.status(400).send({message: `${err.message} - ID not found.`})
        }
      })
  }

  static createVehicles = (req, res) => {
    let vehicle = new vehicles(req.body)
    vehicle.save((err) => {
      if (!err) {
        res.status(201).send(vehicle.toJSON())
      } else {
        res.status(500).send({message: `${err.message} - not possible to create this new vehicle.`})
      }
    })
  }

  static updateVehicles = (req, res) => {
    const {id} = req.params
    vehicles.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Vehicle updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteVehicles = (req, res) => {
    const {id} = req.params
    vehicles.findByIdAndUpdate(id, { isDeleted: true } ,(err) => {
      if (!err) {
        res.status(200).send({message: `Vehicle deleted successfully`})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  // static deleteVehicles = (req, res) => {
  //   const {id} = req.params
  //   vehicles.findByIdAndDelete(id, (err) => {
  //     if (!err) {
  //       res.status(200).send({message: 'Vehicle deleted successfully'})
  //     } else {
  //       res.status(500).send({message: `ID not found - ${err.message}`})
  //     } 
  //   })
  // }

}

export default VehicleController
