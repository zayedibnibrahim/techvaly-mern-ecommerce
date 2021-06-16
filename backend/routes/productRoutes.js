const express = require('express')
const {
  getProducts,
  getProductById,
} = require('../controllers/productContollers')
const router = express.Router()

router.route('/').get(getProducts)

router.route('/:id').get(getProductById)

module.exports = router
