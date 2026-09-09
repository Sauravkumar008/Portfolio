import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { FiArrowUp } from "react-icons/fi";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Scroll Indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-cyan-400 z-[100] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="relative min-h-screen bg-slate-50 dark:bg-[#07090e] font-sans text-slate-800 dark:text-slate-100 transition-colors duration-300 overflow-hidden">
        {/* Subtle Tech Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] dark:opacity-[0.06] [background-image:linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* Ambient Dark Glow Effects */}
        <div className="pointer-events-none hidden dark:block absolute -top-40 left-1/2 -translate-x-1/2 w-[650px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-cyan-500/15 to-transparent blur-[140px] rounded-full" />
        <div className="pointer-events-none hidden dark:block absolute top-[40%] -right-40 w-[500px] h-[400px] bg-emerald-600/10 blur-[130px] rounded-full" />

        <div className="relative z-10">
          <Navbar />
          <Home />
          <About />
          <Portfolio />
          <Experiance />
          <Contact />
          <Footer />
        </div>

        {/* Back to Top Floating Button */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="fixed bottom-6 right-6 p-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-black shadow-lg hover:scale-110 active:scale-95 transition-all duration-200 z-50 cursor-pointer"
          >
            <FiArrowUp size={20} className="stroke-[2.5]" />
          </button>
        )}
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;