const express = require('express')
const { send } = require('process')
const Product = require('../model/product')
const router = express.Router()

router.get('',function(req, res){
  Product.find({},function(err, foundProducts){
  return res.json(foundProducts)
  })
})

router.get('/:productId',function(req, res){
  const productId = req.params.productId
  Product.findById(productId, function(err, foundProduct){
    if (err) {
     return res.status(422).send({errors: [{title:'product error',detail:'Product not found'}]})
    }

    return res.json(foundProduct)

  })
})


module.exports = router
