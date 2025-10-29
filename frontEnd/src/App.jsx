import AddToCart from "./components/Cart";
import Checkout from "./components/Checkout";
import Products from "./components/Products";
import OrderPlaced from "./components/OrderPlaced"
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/orderplaced" element={<OrderPlaced/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
