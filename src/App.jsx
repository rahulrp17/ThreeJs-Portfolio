import React from "react";
import "./App.css";
import Navbar from "./pages/Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";
import Footer from "./pages/Components/Footer";
import ScrollToTop from "./ScrollTop";

function App() {
  return (
    <>
       <ScrollToTop />
      <BrowserRouter>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={
              <>
              <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
