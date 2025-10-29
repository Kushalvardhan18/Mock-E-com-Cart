import express from "express"
import { addToCart, getCart, checkOut, deleteItem, products } from "../controller/cart.controller.js"

const router = express.Router()

router.get("/products",products)
router.post("/cart",addToCart)
router.delete("/cart/:id",deleteItem)
router.get("/cart",getCart)
router.post("/checkout",checkOut)

export default router