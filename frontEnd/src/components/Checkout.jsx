import React, { useEffect, useState } from "react";
import apiClient from "../../service/apiClient";
import { useNavigate } from "react-router";
import Loader from "./Loader";
const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.checkout();
        setCheckoutData(response);
        console.log(response);
      } catch (error) {
        console.error("Error", error || "Something went wrong");
      }
    };
    fetchData();
  }, []);

  if (!checkoutData) return <Loader />;
  return (
  <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800">
    🛍️ Order Summary
  </h1>

  <div className="space-y-4">
    {checkoutData.items.map((item, index) => (
      <div
        key={index}
        className="flex flex-col md:flex-row justify-between items-center p-4 border rounded-lg hover:shadow-md transition-shadow bg-gray-50"
      >
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <p className="text-gray-600">Price: ₹{item.price}</p>
        </div>

        <div className="flex justify-between items-center gap-4 mt-2 md:mt-0">
          <span className="text-gray-700">Qty: {item.quantity}</span>
          <span className="text-gray-900 font-bold">
            ₹{item.quantity * item.price}
          </span>
        </div>
      </div>
    ))}
  </div>

  <div className="flex justify-between items-center mt-6 pt-4 border-t text-lg md:text-xl font-bold text-gray-900">
    <span>Total:</span>
    <span>₹{checkoutData.totalAmount}</span>
  </div>

  <button
    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-colors text-lg"
    onClick={() => navigate("/orderplaced")}
  >
    ✅ Place Order
  </button>
</div>

  );
};

export default Checkout;
