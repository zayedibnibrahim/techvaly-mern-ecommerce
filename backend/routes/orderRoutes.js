const express = require('express')
const { addOrderItems } = require('../controllers/orderControllers')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

router.route('/').post(protect, addOrderItems)

module.exports = router
