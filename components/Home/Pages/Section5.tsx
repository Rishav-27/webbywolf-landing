"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Section5 = () => {
  const cards = [
    {
      img: "/images/Frame20.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur risus cras nunc. Nunc porttitor lacus vitae vulputate. Phasellus in morbi molestie a vulputate egestas eget eget turpis et. Mi eget nec et. Libero rhoncus rhoncus enim venenatis blanditum.",
    },
    {
      img: "/images/Frame_20_1.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur risus cras nunc. Nunc porttitor lacus vitae vulputate. Phasellus in morbi molestie a vulputate egestas eget eget turpis et. Mi eget nec et. Libero rhoncus rhoncus enim venenatis blanditum.",
    },
    {
      img: "/images/Frame_20_2.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur risus cras nunc. Nunc porttitor lacus vitae vulputate. Phasellus in morbi molestie a vulputate egestas eget eget turpis et. Mi eget nec et. Libero rhoncus rhoncus enim venenatis blanditum.",
    },
    {
      img: "/images/Frame20_3.svg",
      title: "Lorem ipsum dolor sit amet consectetur.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nunc gravida consectetur risus cras nunc. Nunc porttitor lacus vitae vulputate. Phasellus in morbi molestie a vulputate egestas eget eget turpis et. Mi eget nec et. Libero rhoncus rhoncus enim venenatis blanditum.",
    },
  ];

  return (
    <div className="w-full px-6 md:px-20 py-20 bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <p className="text-[#1959AC] text-sm font-inter mb-2">
            Lorem ipsum dolor sit amet
          </p>
          <h2 className="text-[42px] text-[#222222] font-bold font-['Roboto_Condensed'] tracking-[-0.02em] mb-4 leading-snug">
            LOREM IPSUM DOLOR SIT
          </h2>
          <p className="text-[#444444] text-[18px] font-inter max-w-3xl mb-12 tracking-[-0.02em]">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sodales facilisis donec dui. Mi porttitor ut aliquam mattis nascetur eget integer in nam. Nam nisl iaculis ac felis aliquet. Hendrerit tellus a purus lectus.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              whileHover={{ rotate: 1.5, scale: 1.03 }}
              transition={{
                type: "tween", // smoother and quicker than spring
                ease: "easeInOut",
                duration: 0.25,
              }}
              className="bg-[#F9FAFB] p-8 rounded-xl shadow-md hover:shadow-lg transition-transform duration-200"
            >
              <Image
                src={card.img}
                alt={`card-${index}`}
                width={600}
                height={320}
                className="w-full h-[280px] object-cover rounded-lg mb-5"
              />
              <h3 className="text-[#222222] text-[18px] font-semibold font-inter mb-2">
                {card.title}
              </h3>
              <p className="text-[#444444] font-inter text-[16px] mb-6">
                {card.description}
              </p>
              <p className="text-[#1959AC] font-inter text-sm cursor-pointer hover:underline pt-2">
                Learn More
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section5;
