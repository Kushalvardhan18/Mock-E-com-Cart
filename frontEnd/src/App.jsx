import AddToCart from "./components/Cart";
import Products from "./components/Products";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/cart" element={<AddToCart/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
