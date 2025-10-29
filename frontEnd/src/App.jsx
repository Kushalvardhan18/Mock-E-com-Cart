import AddToCart from "./components/AddToCart";
import Products from "./components/Products";
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/addtocart" element={<AddToCart/>}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
