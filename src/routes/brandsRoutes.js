import express from "express";
import BrandsController from "../controllers/brandsController.js";

const router = express.Router()

router
  .get('/api/v1/brands', BrandsController.listBrands)
  .get('/api/v1/brands/:id', BrandsController.listBrandsById)
  .post('/api/v1/brands', BrandsController.createBrand)
  .put('/api/v1/brands/:id', BrandsController.updateBrand)
  .delete('/api/v1/brands/:id', BrandsController.deleteBrand)

export default router


