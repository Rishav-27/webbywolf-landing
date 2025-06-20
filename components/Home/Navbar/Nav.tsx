"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

interface NavProps {
  openNav?: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const [navBg, setNavBg] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);
  const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setDropdownRef = (el: HTMLDivElement | null, idx: number) => {
    dropdownRefs.current[idx] = el;
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setNavBg(currentScroll >= 90);

      if (currentScroll > lastScrollY.current && currentScroll > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const clickedInsideAny = dropdownRefs.current.some((ref) =>
        ref?.contains(event.target as Node)
      );
      if (!clickedInsideAny) setOpenIndex(null);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[12vh] z-[1000] transition-transform duration-300 ease-in-out
      ${navBg ? "bg-white shadow-sm backdrop-blur-md" : "bg-transparent"} 
      ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto relative">
        <Image
          src="/images/Logo.svg"
          alt="Logo"
          width={100}
          height={50}
          className="-ml-15"
        />

        <div className="absolute left-1/2 -translate-x-1/2 flex gap-10">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              ref={(el) => setDropdownRef(el, idx)}
              className="relative"
              onMouseEnter={() => setOpenIndex(idx)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <button
                aria-haspopup="true"
                aria-expanded={openIndex === idx}
                tabIndex={0}
                className="flex items-center text-[#1565c0] text-lg font-semibold focus:outline-none cursor-pointer"
              >
                Lorem Ipsum
                <RiArrowDropDownLine className="ml-1 text-2xl text-[#1565c0]" />
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-44 bg-white rounded-2xl shadow-xl border border-gray-100 z-50 overflow-hidden"
                  >
                    <li className="px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">
                      Menu Item 1
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">
                      Menu Item 2
                    </li>
                    <li className="px-4 py-3 hover:bg-gray-50 text-sm text-gray-700 cursor-pointer">
                      Menu Item 3
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button className="bg-white shadow-md rounded-lg px-9 py-1 text-lg font-semibold text-black hover:shadow-lg transition">
            Sign In
          </button>

          <button
            onClick={openNav}
            className="md:hidden text-2xl text-[#1565c0]"
          >
            ☰
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
