"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaCloud, FaStar, FaChessRook, FaInfo } from "react-icons/fa";

const users = [
  {
    icon: <FaCloud size={28} className="text-[#1959AC]" />,
    text: "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    name: "Jane Cooper",
    image: "/images/user1.jpg",
  },
  {
    icon: <FaStar size={28} className="text-[#1959AC]" />,
    text: "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    name: "Ralph Edwards",
    image: "/images/user2.jpg",
  },
  {
    icon: <FaChessRook size={28} className="text-[#1959AC]" />,
    text: "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor.",
    name: "Courtney Henry",
    image: "/images/user3.jpg",
  },
  {
    icon: <FaInfo size={28} className="text-[#1959AC]" />,
    text: "Hendrerit augue ut nisl euismod, quis integer netus. Sed risus rhoncus magnis habitasse. Egestas amet habitant tellus ornare. Hendrerit commodo eu egestas. Mauris egestas vitae praesent neque.",
    name: "Cameron Williamson",
    image: "/images/user4.jpg",
  },
];

const Section8 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#0546D2] px-6 py-20"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-white mb-2 font-['Inter']">
              Join other Sun harvesters
            </p>
            <h2 className="text-[42px] font-bold tracking-[-0.02em] text-white mb-4 font-['Roboto_Condensed'] leading-tight">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-white text-[18px] font-['Inter'] leading-relaxed">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi
              tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white text-[#0546D2] font-semibold text-sm px-8 py-4 rounded-md mt-6 md:mt-0 hover:bg-gray-100 transition font-['Inter']"
          >
            Lorem Ipsum
          </motion.button>
        </motion.div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white text-[#222222] rounded-xl p-6 shadow-md h-[460px] flex flex-col justify-between transform transition duration-300 ease-in-out hover:scale-105"
            >
              <div>
                <div className="mb-4">{user.icon}</div>
                <p className="text-sm font-['Inter'] leading-relaxed">
                  {user.text}
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={user.image}
                  alt={user.name}
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <p className="text-sm font-semibold font-['Inter']">
                  {user.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-start mt-10 gap-4"
        >
          <button className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#0546D2] text-white transition">
            ←
          </button>
          <button className="w-10 h-10 flex items-center justify-center border border-white rounded-full hover:bg-white hover:text-[#0546D2] text-white transition">
            →
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section8;
