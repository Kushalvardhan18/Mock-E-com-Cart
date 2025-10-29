import React, { useState } from "react";
import { useEffect } from "react";
import apiClient from "../../service/apiClient";

const Products = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiClient.products();
        console.log(response);

        setData(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  if (!data) return <h1>loading...</h1>;

 const items = data.products?.map((product) => ({
    id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
  })) || [];
  return (
    <>
      <h1 className="text-center text-3xl">Products</h1>
      <div className="grid grid-cols-4 gap-5 m-3">
        {items.map((item) => (
          <div key = {item.id} className="bg-white p-1">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-70 object-fill"
            />
            <div className="flex justify-between mx-1 mb-8">
              <h3 className="text-black font-bold">{item.name}</h3>
              <h3 className="text-blue-900 font-semibold"> ₹ {item.price}</h3>
            </div>
            <div className="flex justify-center">
              <button className="bg-blue-500 py-2 px-3 rounded-md cursor-pointer hover:bg-blue-800 hover:scale-110 duration-500">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
