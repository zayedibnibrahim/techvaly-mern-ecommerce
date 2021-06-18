const express = require('express')
const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/userControllers')

const router = express.Router()
const protect = require('../middleware/authMiddleware')

router.route('/').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect, getUserProfile)

module.exports = router