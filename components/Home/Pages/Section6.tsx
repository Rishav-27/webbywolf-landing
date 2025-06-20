"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Section6 = () => {
  return (
    <div className="relative w-full h-screen mt-24 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/blvkbeats.svg"
        alt="Banner Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />

      {/* Logo (Top-Left) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="absolute top-10 left-16 z-20"
      >
        <Image src="/images/Logo.svg" alt="Logo" width={120} height={60} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-6 md:px-12"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl uppercase md:text-4xl font-bold leading-snug mb-8">
            dolor sit amet consectetur. Quis <br />
            adipiscing purus egestas aliquam viverra <br />
            mi. dolor sit amet consectetur. Quis <br />
            adipiscing
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Section6;
