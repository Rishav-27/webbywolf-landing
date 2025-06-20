"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section7 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white py-24 px-4 md:px-10 lg:px-20"
    >
      {/* Gray Box with content and gradient bottom line */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto bg-gray-50 flex flex-col md:flex-row items-center gap-10 py-16 relative rounded-xl"
      >
        {/* Left: Image floated upward */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full -ml-16 -mt-80 md:w-1/2 relative h-[300px]"
        >
          <Image
            src="/images/Section7-Image.svg"
            alt="Section 7 Visual"
            width={600}
            height={400}
            className="absolute -top-16 left-0 w-full h-auto object-contain"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full md:w-1/2"
        >
          {/* Top Label */}
          <p className="text-[#1959AC] text-sm font-inter mb-3">Lorem ipsum</p>

          {/* Heading */}
          <h2 className="text-[42px] leading-tight tracking-tight font-roboto font-bold mb-5">
            <span className="text-[#1959AC]">LOREM</span>{" "}
            <span className="text-[#222222]">
              IPSUM DOLOR SIT <br />
              AMET CONSECTETUR. ENIM <br />
              DONEC.
            </span>
          </h2>

          {/* Description */}
          <p className="text-[#444444] font-inter text-[18px] mb-6">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          {/* 2-Column List with hover animation */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum",
              "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"
            ].map((item, index) => (
              <motion.p
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="text-[#222222] text-[18px] font-bold font-inter cursor-pointer"
              >
                {item}
              </motion.p>
            ))}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-6 py-3 rounded-md flex items-center gap-2 font-inter text-sm shadow-md"
          >
            Lorem Ipsum <FaArrowRight />
          </motion.button>
        </motion.div>

        {/* Bottom Gradient Line inside the gray box */}
        <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041]" />
      </motion.div>
    </motion.div>
  );
};

export default Section7;
