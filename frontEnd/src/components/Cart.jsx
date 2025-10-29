import React, { useEffect, useState } from "react";
import apiClient from "../../service/apiClient";
import Loader from "./Loader";
const Cart = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.cart();
        console.log(response);
        setData(response);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchData();
  }, []);

  const items = data?.map((product) => ({
    id: product._id,
    name: product.productId.name,
    price: product.productId.price,
    image: product.productId.image,
    quantity: product.quantity,
  }));

  if (!data) return <Loader />;
  return (
   <div className="bg-gray-50 min-h-screen py-10">
  <h1 className="text-gray-800 text-4xl font-extrabold text-center mb-10">
    🛒 Your Shopping Cart
  </h1>

  <div className="flex flex-col lg:flex-row justify-between gap-6 px-6 max-w-6xl mx-auto">
  
    <div className="w-full lg:w-3/4 bg-white rounded-lg shadow-md p-5">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row items-center justify-between border-b border-gray-200 py-4 hover:bg-gray-50 transition"
        >
          {/* Product Info */}
          <div className="flex items-center gap-5 w-full sm:w-auto">
            <img
              src={item.image}
              alt={item.name}
              className="w-70 h-50 object-cover rounded-md border border-gray-200 shadow-sm"
            />
            <div>
              <h3 className="text-gray-900 font-semibold text-lg">{item.name}</h3>
              <p className="text-blue-800 font-medium text-md">₹ {item.price}</p>
            </div>
          </div>

         
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <button className="w-8 h-8 flex justify-center bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-xl font-bold">
              −
            </button>
            <span className="text-red-700 font-semibold text-md w-6 text-center">
              {item.quantity}
            </span>
            <button className="w-8 h-8 flex justify-center  bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition text-xl font-bold">
              +
            </button>
          </div>
        </div>
      ))}
    </div>

   
    <div className="w-full lg:w-1/4 bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Summary</h2>

      <div className="w-full border-t border-gray-200 pt-4 mb-6">
        <div className="flex justify-between text-gray-700 font-medium mb-2">
          <span>Subtotal</span>
          <span>₹ {items.reduce((acc, item) => acc + item.price * item.quantity, 0)}</span>
        </div>
        <div className="flex justify-between text-gray-700 font-medium mb-2">
          <span>Shipping</span>
          <span>₹ 99</span>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-900 mt-3 border-t pt-3">
          <span>Total</span>
          <span>₹ {items.reduce((acc, item) => acc + item.price * item.quantity, 0) + 99}</span>
        </div>
      </div>

      <button className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg shadow transition">
        Proceed to Checkout →
      </button>
    </div>
  </div>
</div>

  );
};

export default Cart;
