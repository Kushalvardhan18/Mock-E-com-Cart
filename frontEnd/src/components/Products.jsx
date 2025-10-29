import React from "react";
import { useEffect } from "react";
import apiClient from "../../service/apiClient";

const Products = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await apiClient.products();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl">Products</h1>
      <div className="grid grid-cols-4 gap-5 m-3">
        <div>
          <img
            src="https://imgs.search.brave.com/GfrFxjRhqQFPwPP50tHh8McLLaEaKLCrCRav_WSeJ9c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi95ZWxs/b3ctY3Jhc2gtdGVz/dC1kdW1teS1wb3Np/dGlvbmVkLWhhcm5l/c3MtcmVhZHktc2Fm/ZXR5LWV2YWx1YXRp/b25zLWluc2lkZS1t/b2Rlcm4tdGVzdGlu/Zy1mYWNpbGl0eS1i/cmlnaHQtMzY2MTI5/OTQ2LmpwZw"
            alt=""
          />
          <div className="flex justify-between">
            <h3>robot</h3>
            <h3>2000</h3>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-500 py-2 px-3 rounded-md cursor-pointer hover:bg-blue-800 hover:scale-110 duration-500">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
