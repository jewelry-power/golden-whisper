import logo from './logo.svg';
import './App.css';
// import Nav from "./pages/Nav"
import Hero from "./Hero"
import Footer from "./pages/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductPage from "./pages/Allproduct";
// import Cart from "./other/Cart";
import Home from "./pages/Home"
import Discount from "./pages/Discount"
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';

function App() {
  return (
    <div className="App">
<BrowserRouter>
{/* <Nav/> */}

      <Routes>

        <Route path="/" element={<Home />}/>
        <Route path="/pro" element={<ProductPage/>}/>
        <Route path="/dis" element={<Discount/>}/>
          
     
         <Route path="/Signup" element={<SignUp/>}/> 
         <Route path="/Signin" element={<SignIn/>}/> 
        
   
          {/* <Route path="*" element={<NoPage />} /> */}
         
      </Routes>
   
      <Footer/>
    </BrowserRouter>





  
    </div>
  );
}

export default App;
