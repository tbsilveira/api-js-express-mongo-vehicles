import express from "express";
import BrandsController from "../controllers/brandsController.js";

const router = express.Router()

router
  .get('/api/v1/brands', BrandsController.listBrands)
  .post('/api/v1/brands', BrandsController.createBrand)


export default router


