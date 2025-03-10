"use client";

import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const controls = useAnimation();

  // Handle Scroll Event
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={visible ? { y: 0, opacity: 1 } : { y: -100, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="relative w-full bg-black text-blue-500 shadow-lg z-50"
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-5">
        
        {/* Left: Logo & Name */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-4"
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-500 text-white text-lg font-bold rounded-full">
            AA
          </div>
          <span className="text-3xl font-bold italic tracking-wide text-blue-500">
            Akhila Annireddy.
          </span>
        </motion.div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Projects", "Resume", "Blog", "About"].map((item, index) => (
            <motion.div 
              key={index} 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={`/${item.toLowerCase()}`}
                className="text-lg italic text-blue-500 hover:text-blue-400 hover:font-bold transition-all duration-300 ease-in-out"
              >
                {item}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl focus:outline-none text-blue-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="md:hidden bg-black px-6 py-4 space-y-2"
        >
          {["Home", "Projects", "Resume", "Blog", "About"].map((item, index) => (
            <Link
              href={`/${item.toLowerCase()}`}
              key={index}
              className="block text-lg italic text-blue-500 hover:text-blue-400 hover:font-bold transition-all duration-300 ease-in-out"
            >
              {item}
            </Link>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
