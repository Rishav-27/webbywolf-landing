"use client";

import React from "react";
import Image from "next/image";
import { MdPushPin } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Section10 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full px-6 py-60"
    >
      <div
        className="relative -ml-7 max-w-[1440px] mx-auto bg-[#F8F9FB] flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        style={{
          borderBottomWidth: "20px",
          borderBottomStyle: "solid",
          borderImage: "linear-gradient(to right, #043898, #079902, #170041) 1",
        }}
      >
        {/* Left Column: Content */}
        <div className="w-full ml-15 pb-60 pt-15 md:w-5/12 z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-[#1959AC] mb-4 font-['Roboto_Condensed']"
          >
            LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. <br /> DIGNISSIM TELLUS.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#222] text-base leading-relaxed mb-6"
          >
            Lorem ipsum dolor sit amet consectetur. In malesuada morbi mi blandit laoreet
            urna sapien quam pulvinar. Dolor aliquet est tortor tincidunt ultricies
            feugiat mauris. Aliquam platea turpis porta nisl felis. Massa in facilisis
            semper libero eget eu quisque bibendum platea. Tortor fames.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-[#1959AC] text-white px-6 py-3 w-full max-w-[280px] rounded-md flex items-center justify-center gap-2 text-sm hover:bg-[#0546D2]"
          >
            Lorem Ipsum <FaArrowRight />
          </motion.button>
        </div>

        {/* Right Column: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="relative w-full md:w-7/12 flex -mt-90 justify-end"
        >
          <Image
            src="/images/Section10-Image.svg"
            alt="Section 10 Image"
            width={400}
            height={300}
            className="object-contain relative z-0"
          />
        </motion.div>
      </div>

      {/* Overlay Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute left-15 bottom-[150px] bg-white shadow-md p-8 w-full max-w-md z-20"
      >
        <div className="absolute top-2 right-2 rotate-[45deg] text-[red]">
          <MdPushPin size={24} />
        </div>
        <p className="font-bold text-[#222] mb-2">Lorem ipsum dolor sit</p>
        <p className="text-sm text-[#222] mb-1">
          Lorem ipsum dolor sit amet consectetur. Habitant vestibulum vitae amet habitasse
          semper.
        </p>
        <p className="text-sm text-[#222] mb-1">
          Lorem ipsum dolor sit amet consectetur. Egestas congue mattis ut placerat vitae
          amet suspendisse fermentum velit. Nibh dolor nunc id tristique sit.
        </p>
        <p className="text-sm text-[#222]">
          Lorem ipsum dolor sit amet consectetur. Hac netus consectetur amet quisque
          scelerisque facilisi. Ultrices lectus viverra pharetra commodo.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Section10;
