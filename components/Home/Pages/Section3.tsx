'use client';

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section3 = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full h-screen mt-24"
    >
      {/* Background Image */}
      <Image
        src="/images/Banner1.svg"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Logo (Top-Left, slightly right) */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="absolute top-10 left-20 z-20"
      >
        <Image src="/images/Logo.svg" alt="Logo" width={120} height={60} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-12"
      >
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-8 font-['Roboto_Condensed'] tracking-[-0.02em]">
          Lorem ipsum dolor sit amet consectetur. Quis <br />
          adipiscing purus egestas aliquam viverra mi
        </h1>

        {/* Paragraph 1 */}
        <p className="text-base md:text-lg leading-relaxed mb-6 max-w-3xl font-['Inter']">
          Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum <br />
          nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus <br />
          id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam <br />
          condimentum nulla quam.
        </p>

        {/* Paragraph 2 */}
        <p className="text-base md:text-lg leading-relaxed mb-10 max-w-3xl font-['Inter']">
          Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum <br />
          ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra <br />
          quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt <br />
          morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
        </p>

        {/* Button with Hover Animation */}
        <button className="bg-white text-[#1959AC] px-6 py-3 rounded-md flex items-center gap-3 text-base font-medium shadow-md hover:shadow-lg hover:scale-105 transition duration-200 cursor-pointer">
          Lorem Ipsum <FaArrowRight />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default Section3;
