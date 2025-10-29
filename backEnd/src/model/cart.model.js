import mongoose from "mongoose";

const Cart = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, default: 1 },
});

export default mongoose.model("Cart", Cart);
