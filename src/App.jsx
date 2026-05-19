
// import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";

import Home from "./pages/Home";


// import Footer from "./components/Footer";
// import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";




export default function App() {
  return (
    <div >
      

      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
      
         
    </div>
  )
}
