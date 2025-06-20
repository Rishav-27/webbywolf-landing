"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    image: "/images/Section11-Image.svg",
    title: "Artist & Investor",
    description:
      "Enim sagittis, sit porttitor morbi lobortis amet, libero adipiscing auctor. Malesuada tristique libero, id netus tincidunt. Egestas ac arcu amet nisl quis est ...",
    imageAlign: "right",
    overlayPosition: "left",
  },
  {
    image: "/images/Section11-Image.svg",
    title: "Creative Director",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Dui at tincidunt tristique sem sed.",
    imageAlign: "left",
    overlayPosition: "right",
  },
  {
    image: "/images/Section11-Image.svg",
    title: "Marketing Lead",
    description:
      "Faucibus tellus sit pellentesque suspendisse. Urna at non commodo nisi tristique facilisis.",
    imageAlign: "right",
    overlayPosition: "center",
  },
  {
    image: "/images/Section11-Image.svg",
    title: "Product Designer",
    description:
      "Donec commodo, diam id malesuada iaculis, lorem tortor hendrerit erat, placerat justo urna.",
    imageAlign: "left",
    overlayPosition: "right",
  },
  {
    image: "/images/Section11-Image.svg",
    title: "Founder & CEO",
    description:
      "Integer euismod, metus nec sagittis elementum, lorem libero efficitur nulla, eget vestibulum.",
    imageAlign: "right",
    overlayPosition: "left",
  },
  {
    image: "/images/Section11-Image.svg",
    title: "Design Strategist",
    description:
      "Aenean facilisis ligula vitae enim tincidunt, non gravida augue vehicula. Pellentesque ut.",
    imageAlign: "left",
    overlayPosition: "center",
  },
];

const Section11 = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="bg-white px-6 md:px-20 py-16 text-center flex flex-col items-center overflow-hidden">
      <h2 className="text-2xl md:text-3xl font-bold text-[#0F172A] uppercase font-['Roboto_Condensed'] mb-4">
        Lorem Ipsum Dolor Sit Amet
      </h2>

      <p className="text-[#475569] max-w text-sm md:text-base leading-relaxed mb-10">
        Aliquet sed nulla tincidunt pulvinar sed fames sit facilisis dictumst.
        Ornare faucibus quis velit fringilla aliquam ultricies. Malesuada ut
        aliquam at ac est    nisi, interdum etiam dignissim. Sed ut vestibulum eget
        purus ornare. Risus elit et fringilla habitant ut facilisi.
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className={`relative w-full max-w-6xl grid grid-cols-1 md:grid-cols-12 gap-6 items-center px-4`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className={`md:col-span-7 ${
              slide.imageAlign === "left" ? "order-last" : ""
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              width={500}
              height={400}
              className="rounded-md object-cover w-full"
            />
          </div>

          <motion.div
            className={`relative md:col-span-5 bg-white p-6 shadow-lg rounded-lg max-w-md z-10
              ${
                slide.overlayPosition === "left"
                  ? "ml-[-20%] text-left"
                  : slide.overlayPosition === "right"
                  ? "mr-[-20%] text-right ml-auto"
                  : "mx-auto text-center"
              } animate-fadeIn`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-[#0F172A] font-semibold mb-2">{slide.title}</h3>
            <p className="text-[#334155] text-sm mb-4">{slide.description}</p>
            <a
              href="#"
              className="text-[#1959AC] text-sm font-semibold inline-flex items-center gap-1 hover:underline"
            >
              Read Full Story <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      <div className="flex gap-4 mt-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`h-3 rounded-full transition-all duration-300 transform focus:outline-none
              ${current === idx ? "bg-[#1959AC] w-10" : "bg-[#CBD5E1] w-3"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Section11;
