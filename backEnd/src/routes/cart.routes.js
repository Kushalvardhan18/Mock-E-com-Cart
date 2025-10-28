import express from "express"
import { addToCart, cartTotal, checkOut, deleteItem, products } from "../controller/cart.controller.js"

const router = express.Router()

router.get("/products",products)
router.post("/cart/Add",addToCart)
router.delete("/cart:id",deleteItem)
router.get("/cart",cartTotal)
router.post("/checkout",checkOut)

export default router