
import order from "../assets/order.png";

const OrderPlaced = () => {

 
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-20">
        <h1 className="text-4xl mb-2">Order Placed </h1>
        <img src={order} alt="order placed" width={150} />
      </div>
      
    </div>
  );
};

export default OrderPlaced;
