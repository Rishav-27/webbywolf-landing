"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const brandLogos = [
  { name: "Hero", src: "/images/Hero_Moto.svg" },
  { name: "Honda", src: "/images/Honda_.svg" },
  { name: "Bajaj", src: "/images/Bajaj.svg" },
  { name: "TVS", src: "/images/TVS_Motor.svg" },
  { name: "Royal Enfield", src: "/images/royal-enfield.svg" },
  { name: "Yamaha", src: "/images/648cb.svg" },
  { name: "KTM", src: "/images/KTM-L.svg" },
  { name: "Ather", src: "/images/Ather.svg" },
  { name: "Ola Electric", src: "/images/Ola-Ele.svg" },
  { name: "Revolt", src: "/images/new-log.svg" },
  { name: "Ultraviolette", src: "/images/Ultraviolette_Logo.svg" },
  { name: "Tork", src: "/images/ANI.svg" },
];

const Section4 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white py-14 px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-[#222222] text-[32px] font-bold tracking-[-0.02em] leading-snug font-['Roboto_Condensed'] mb-12">
          LOREM IPSUM DOLOR SIT AMET <br />
          CONSECTETUR. COMMODO LEO AMET.
        </h2>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center justify-items-center">
          {brandLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="w-[120px] h-[60px] flex items-center justify-center transition-transform duration-300 hover:scale-110"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={100}
                height={50}
                className="object-contain w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Section4;
