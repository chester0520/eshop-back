import express from 'express'
import auth from '../middleware/auth.js'
import {
  register,
  login,
  logout,
  addCart,
  getCart,
  editCart,
  checkout,
  getorders,
  getallorders
} from '../controllers/users.js'

const router = express.Router()

router.post('/', register)
router.post('/login', login)
router.delete('/logout', auth, logout)
router.post('/cart', auth, addCart)
router.get('/cart', auth, getCart)
router.patch('/cart', auth, editCart)
router.post('/checkout', auth, checkout)
router.get('/orders', auth, getorders)
router.get('/orders/all', auth, getallorders)

export default router
