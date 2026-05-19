
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutImage from "./components/AboutImage";
import HomeImage from "./components/HomeImage";
import Footer from "./components/Footer";




export default function App() {
  return (
    <div >
      
      <Header />
      
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeImage />} />
        <Route path="/about" element={<AboutImage />} />
      </Routes>
      
      <Footer />    
    </div>
  )
}
