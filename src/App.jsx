import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="bg-black text-fuchsia-50">
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
