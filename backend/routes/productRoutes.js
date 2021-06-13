const express = require('express')
const router = express.Router()
const productModel = require('../models/productModel')
const asyncHandler = require('express-async-handler')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public

router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await productModel.find({})
    res.json(products)
  })
)

// @desc    Fetch single products
// @route   GET /api/products
// @access  Public

router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const product = await productModel.findById(req.params.id)
    if (product) {
      res.status(200).json(product)
    } else {
      res.status(404).json({ message: 'Product not found' })
    }
  })
)

module.exports = router
