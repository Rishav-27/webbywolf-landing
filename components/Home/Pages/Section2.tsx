"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section2 = () => {
  return (
    <div className="w-full px-6 md:px-12 mt-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row bg-white shadow-md pt-12 pb-24 min-h-[700px]"
      >
        {/* Left Side */}
        <div className="w-full md:w-[58%] pl-6 md:pl-28 pr-6">
          <div className="mb-10">
            <p className="text-[#1959AC] font-semibold text-md uppercase font-['Inter'] tracking-[-0.02em] mb-3">
              Lorem ipsum dolor sit amet
            </p>
            <h1 className="text-[42px] font-bold uppercase text-[#222222] font-['Roboto_Condensed'] tracking-[-0.02em] leading-tight mb-5">
              LOREM IPSUM DOLOR SIT <br /> AMET CONSECTETUR. EU <br /> ELIT.
            </h1>
            <p className="text-[#222222] text-[20px] font-['Inter'] font-semibold tracking-[-0.02em] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Mauris ullamcorper etiam leo eleifend<br />
              condimentum in vitae faucibus. Amet massa malesuada sit pretium. Donec<br />
              pharetra erat lacus suspendisse ornare.
            </p>
          </div>

          {/* Info Points */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((_, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-md p-2 rounded-md"
              >
                <Image
                  src="/images/Sure_D.png"
                  alt={`Pointer ${idx + 1}`}
                  width={36}
                  height={36}
                />
                <p className="text-[#222222] text-[16px] font-['Inter'] tracking-[-0.02em] leading-snug">
                  <b className="block text-[20px] font-semibold mb-2 group-hover:text-[#1959AC] transition-colors duration-300">
                    Lorem ipsum dolor sit amet consectetur. Volutpat hac morbi egestas.
                  </b>
                  Lorem ipsum dolor sit amet consectetur. Eros egestas et arcu eu non<br />
                  viverra. Risus quam mattis senectus vitae interdum odio ornare gravida<br />
                  vestibulum. Donec turpis nulla felis mauris eu donec. Ipsum sit ut tortor.
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-[42%] flex justify-start items-start mt-10"
        >
          <Image
            src="/images/Section2-Image.svg"
            alt="Section 2 Visual"
            width={600}
            height={700}
            className="object-cover rounded-md"
          />
        </motion.div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 right-0 w-[90%] h-[30px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mix-blend-multiply rounded-l-full" />
      </motion.div>
    </div>
  );
};

export default Section2;
