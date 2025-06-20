"use client";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Section1 = () => {
  return (
    <div className="w-full px-6 md:px-12 mt-14">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col md:flex-row bg-white border-l border-t border-gray-300 shadow-md pl-12 pt-12 pb-32 min-h-[950px]"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 pr-6">
          <span className="text-md text-[#1959AC] font-semibold uppercase tracking-[-0.02em]">
            lorem ipsum dolor sit
          </span>
          <h1 className="text-[42px] font-bold text-[#222222] leading-snug tracking-[-0.02em] font-['Roboto_Condensed'] mt-2 mb-6">
            LOREM IPSUM <br /> DOLOR SIT AMET
          </h1>
          <p className="text-[#222222] text-[20px] font-['Inter'] font-semibold tracking-[-0.02em] mb-10 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis <br />
            facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget <br />
            integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus <br />
            at purus lectus.
          </p>

          {/* Info Cards */}
          <div className="flex flex-col gap-8">
            {[1, 2, 3].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              >
                <Image
                  src={
                    i === 0
                      ? "/images/sfl_digital.svg"
                      : i === 1
                      ? "/images/marketingm.svg"
                      : "/images/u8687949195.svg"
                  }
                  alt={`Image ${i + 1}`}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <p className="text-[20px] text-[#222222] font-['Inter'] font-semibold leading-snug group-hover:text-[#1959AC] tracking-[-0.02em] transition duration-300 whitespace-pre-line">
                  {i === 0
                    ? "Lorem ipsum dolor sit amet consectetur.\nVestibulum ornare fermentum feugiat."
                    : i === 1
                    ? "Lorem ipsum dolor sit amet consectetur.\nDictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis."
                    : "Lorem ipsum dolor sit amet consectetur.\nVestibulum nisl morbi metus gravida eu facilisi enim.\nUt diam auctor tortor tincidunt."}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 mt-12"
          >
            <button className="bg-[#1959AC] text-white px-8 py-4 rounded-md flex items-center gap-3 text-[20px] font-['Inter'] font-semibold tracking-[-0.02em] shadow-md hover:shadow-lg hover:opacity-90 active:scale-95 active:shadow-inner cursor-pointer transition duration-150">
              Loerum Ipsum <FaArrowRight />
            </button>

            <a
              href="tel:123456789"
              className="flex items-center gap-2 text-[#1959AC] text-[20px] font-['Inter'] font-semibold tracking-[-0.02em] hover:underline active:scale-95 transition-transform duration-150 cursor-pointer"
            >
              <IoCallOutline /> 123456789
            </a>
          </motion.div>
        </div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center items-center mt-12 md:mt-0"
        >
          <Image
            src="/images/3f330e.png"
            alt="Right side"
            width={660}
            height={900}
            className="rounded-md object-cover"
          />
        </motion.div>

        {/* Bottom Gradient Border */}
        <div className="absolute bottom-0 left-0 w-full h-[40px] bg-gradient-to-r from-[#043898] via-[#079902] to-[#170041] mix-blend-multiply" />
      </motion.div>
    </div>
  );
};

export default Section1;
