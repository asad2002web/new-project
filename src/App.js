import Home from "./Pages/Home";
import About from "./Pages/About";
import Featurespage from "./Pages/Featurespage";
import Pricing from "./Pages/Pricing";
import Contact from "./Pages/Contact";
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from "./components/about-navbar/Navbar";
import Footer from "./components/footer/Footer";
import Blog from "./Pages/Blog";
import { Faq } from "./Pages/Faq";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Featurespage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
