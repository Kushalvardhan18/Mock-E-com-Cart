import express from "express"
import { addToCart, getCart, checkOut, deleteItem, products, removeItem } from "../controller/cart.controller.js"

const router = express.Router()

router.get("/products",products)
router.post("/cart",addToCart)
router.delete("/cart/:id",deleteItem)
router.get("/cart",getCart)
router.post("/checkout",checkOut)
router.put("/cart/remove/:id",removeItem)

export default router