"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const Memories = () => {
  return (
    <motion.section
      className="bg-[#F8F9FB] py-20 px-6 md:px-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col  md:flex-row gap-10 relative">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2 relative min-h-[600px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Text Section */}
          <div className="space-y-6 pr-10">
            <p className="text-sm font-bold tracking-wide text-gray-500 uppercase">
              No Limits
            </p>
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-[#222222] font-['Roboto_Condensed'] uppercase leading-tight">
              Lorem Ipsum Dolor Sit Amet
            </h2>
            <p className="text-[#222222] font-['Inter'] text-[17px] font-semibold leading-relaxed tracking-[-0.02em]">
              Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br />
              vitae porttitor pharetra tempor quis arcu. Ipsum <br /> nullam.
            </p>
            <button className="bg-[#1959AC] hover:bg-[#0546D2] text-white font-semibold px-6 py-3 rounded-md inline-flex items-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-200">
              Lorem Ipsum <FaArrowRight className="text-sm" />
            </button>
          </div>

          {/* Image 1 - bottom left */}
          <div className="absolute -bottom-20 -left-5 w-[150px] h-[150px] hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/danazivov.png"
              alt="Image 1"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* Image 2 - bottom right */}
          <div className="absolute -bottom-20 -right-2 w-[470px] h-[275px] hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/rektzed.svg"
              alt="Image 2"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* Image 3 - center right */}
          <div className="absolute bottom-17 right-0 -translate-y-1/2 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/mingham.png"
              alt="Image 3"
              width={160}
              height={240}
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          className="w-full md:w-1/2 relative min-h-[600px]"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          {/* Image 4 - top left */}
          <div className="absolute top-0 -left-4 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/inklings23.svg"
              alt="Image 4"
              width={150}
              height={150}
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* Image 5 - top right */}
          <div className="absolute -top-10 -right-19 hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/eugeni.svg"
              alt="Image 5"
              width={520}
              height={300}
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* Image 6 - center full width */}
          <div className="absolute bottom-1 -left-4 w-[700px] hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/adryana.svg"
              alt="Image 6"
              width={500}
              height={400}
              className="object-cover rounded-md shadow-md w-full h-auto"
            />
          </div>

          {/* Image 7 - bottom left */}
          <div className="absolute -bottom-20 -left-4 h-[70px] hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/twowheelban.svg"
              alt="Image 7"
              width={150}
              height={140}
              className="object-cover rounded-md shadow-md"
            />
          </div>

          {/* Image 8 - bottom right */}
          <div className="absolute -bottom-20 -right-20 w-[520px] h-[70px] hover:scale-105 hover:shadow-lg transition-all duration-300">
            <Image
              src="/images/marketingmagnetr.svg"
              alt="Image 8"
              fill
              className="object-cover rounded-md shadow-md"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Memories;
