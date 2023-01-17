import brands from "../models/Brands.js";

class BrandsController {

  static listBrands = ( _ , res) => {
    brands.find()
      .where({ isDeleted: false })
      .exec((err, brands) => {
        if(!err) {
          res.status(200).json(brands)
        } else{
          res.status(500).send({ message:err.message })
        }
      })
  }

  static listBrandsById = (req, res) => {
    const {id} = req.params
    brands.findById(id)
      .where({ isDeleted: false })
      .select({ isDeleted: 0 })
      .exec((err, brands) => {
        if (!err) {
          res.status(200).send(brands)
        } else {
          res.status(400).send({message: `${err.message} - ID not found.`})
        }
      })
  }

  static createBrand = (req, res) => {
    let brand = new brands(req.body)
    brand.save((err) => {
      if(!err) {
        res.status(200).json(brand)
      } else {
        res.status(500).send({message: `Not possible create a new brand - ${err.message}`})
      }
    })
  } 

  static updateBrand = (req, res) => {
    const {id} = req.params
    brands.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if (!err) {
        res.status(200).send({message: 'Brand updated successfully'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static deleteBrand = (req, res) => {
    const {id} = req.params
    brands.findByIdAndUpdate(id, { isDeleted: true } ,(err) => {
      if (!err) {
        res.status(200).send({message: `Brand deleted successfully`})
      } else {
        res.status(500).send({message: `ID not found - ${err.message}`})
      }
    })
  }

}

export default BrandsController