import logo from './logo.svg';
import './App.css';
import Nav from "./pages/Nav"
import Hero from "./Hero"
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./pages/Products";
import ProductPage from "./other/Product";
// import Cart from "./other/Cart";
import Home from "./pages/Home"
import Discount from "./pages/Discount"


function App() {
  return (
    <div className="App">
<BrowserRouter>
<Nav/>

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/pro" element={<ProductPage/>}/>
        <Route path="/dis" element={<Discount/>}/>
          
      <Route path="/product" element={<Product/>}>       </Route> 
         {/* <Route path="/cart" element={<Cart/>}/>  */}
        
   
          {/* <Route path="*" element={<NoPage />} /> */}
         
      </Routes>
   
      <Footer/>
    </BrowserRouter>





  
    </div>
  );
}

export default App;
