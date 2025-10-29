import Cart from "../model/cart.model.js";
import Product from "../model/product.model.js";
import db from "../utils/db.js";


const products = async (req, res) => {

    try {
        await db()
        const products = await Product.find()
        return res.status(200).json({
            message: "Hii kushal ",
            products: products
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error', error: error.message });
    }

}
const addToCart = async (req, res) => {
    try {
        const { productId } = req.body

        const product = await Product.findById(productId)
        if (!product) return res.status(404).json({ message: "Product not found" });

        let cartItem = await Cart.findOne({ productId })
        if (cartItem) {
            cartItem.quantity += 1
        } else {
            cartItem = new Cart({ productId, quantity: 1 })
        }
        await cartItem.save();
        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
const deleteItem = async (req, res) => {
    try {
        const { id } = req.params
        await Cart.findByIdAndDelete(id)
        res.json({ message: "Item removed from the cart" })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const removeItem = async (req, res) => {
    try {
        const { itemId } = req.params
        const cartItem = await Cart.findOne({ itemId })
        if (!cartItem) {
            return res.status(404).json({ message: "Item not found in cart" })
        }
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            await cartItem.save();
            return res.status(200).json({ message: "Item quantity decreased", cartItem });
        }

        return res.status(400).json({ message: "Item quantity cannot go below 1" });

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

const getCart = async (req, res) => {
    try {
        const items = await Cart.find().populate("productId");
        res.json(items)

    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}
const checkOut = async (req, res) => {
    try {
        const cartItems = await Cart.find()
        if (cartItems.length === 0) {
            return res.status(400).json({ message: "Cart is empty" })
        }
        let total = 0;
        const itemsDetail = [];

        for (let item of cartItems) {

            const product = await Product.findById(item.productId);
            if (product) {
                total += product.price * (item.quantity || 1);
                itemsDetail.push({
                    name: product.name,
                    price: product.price,
                    quantity: item.quantity || 1,
                    subtotal: product.price * (item.quantity || 1)
                });
            }
        }
        await Cart.deleteMany();

        res.status(200).json({
            message: "Checkout successful",
            totalAmount: total,
            items: itemsDetail
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
}

export { products, addToCart, deleteItem, getCart, checkOut, removeItem }