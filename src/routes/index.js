import express from "express";
import vehicles from "./vehiclesRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({vehicleType: "Vehicles API Node-Express-MongoDB"})
  })

  app.use(
    express.json(),
    vehicles
  )
}

export default routes
