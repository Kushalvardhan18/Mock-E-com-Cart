import cart from "../model/cart.model.js"
const products = async  (req,res)=>{
    try {
        const products = await cart.find()

       return  res.status(200).json({
        message:"Hii kushal ",
        products: products
       })
    } catch (error) {
        
    }
}
const addToCart = async  (req,res)=>{}
const deleteItem = async  (req,res)=>{}
const cartTotal = async  (req,res)=>{}
const checkOut = async  (req,res)=>{}

export {products,addToCart ,deleteItem ,cartTotal ,checkOut}