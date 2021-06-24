import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_TOKEN, {
    expiresIn: '30d',
  })
}

export default generateToken
