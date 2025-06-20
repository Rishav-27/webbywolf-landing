"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const AppDownload = () => {
  return (
    <motion.div
      className="w-full bg-white px-0 py-10 md:py-14"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false }}
    >
      <div className="w-full bg-gray-50 flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-6 md:px-20 min-h-[400px] md:min-h-[420px]">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <p className="text-[#1959AC] font-bold text-sm font-inter mb-2 uppercase">
            Lorem ipsum
          </p>

          <h2 className="text-[32px] md:text-[36px] lg:text-[42px] text-[#222222] font-robotoCondensed font-bold leading-tight mb-4 tracking-tight">
            Lorem Ipsum Dolor <br /> Sit Amet
          </h2>

          <p className="text-[#444444] text-[16px] font-inter mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Volutpat amet aliquam morbi
            suspendisse ornare. Urna a urna lectus donec felis maecenas odio
            pellentesque. Pretium egestas ultricies ipsum.
          </p>

          {/* Store Buttons with Animation */}
          <div className="flex gap-4">
            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false }}
              className="transition-transform duration-200 hover:scale-105 hover:shadow-md rounded-md"
            >
              <Image
                src="/images/Google_P.svg"
                alt="Google Play"
                width={140}
                height={40}
              />
            </motion.a>

            <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: false }}
              className="transition-transform duration-200 hover:scale-105 hover:shadow-md rounded-md"
            >
              <Image
                src="/images/Download.svg"
                alt="App Store"
                width={140}
                height={40}
              />
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center items-end h-[420px]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <Image
            src="/images/Group.svg"
            alt="Phone in Hand"
            width={0}
            height={0}
            sizes="100vw"
            className="h-[88%] w-auto object-contain scale-110 md:scale-125"
            priority
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppDownload;
