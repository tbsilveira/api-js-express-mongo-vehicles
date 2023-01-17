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

  static createBrand = (req, res) => {
    let brand = new brands(req.body)
    brand.save((err) => {
      if(!err) {
        res.status(200).send(`Success: Brand created. 
        ${brand.toJSON()}`)
      } else {
        res.status(500).send({message: `Not possible create a new brand - ${err.message}`})
      }
    })
  } 

}

export default BrandsController