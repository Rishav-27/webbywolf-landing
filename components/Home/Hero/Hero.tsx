"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { z } from "zod";
import { motion } from "framer-motion";

const emailSchema = z.object({
  email: z.string().email("Please enter a valid email address")
});

const Hero = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    const result = emailSchema.safeParse({ email });
    if (!result.success) {
      setError(result.error.errors[0].message);
      setSuccess(false);
    } else {
      setError("");
      setSuccess(true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-[#f7f6fb] flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Side: Text */}
      <div className="w-full md:w-1/2 z-10 pt-[22vh] px-6 md:px-20">
        <h1 className="text-[42px] font-bold text-[#222222] mb-4 tracking-[-0.02em] font-['Roboto_Condensed']">
          Lorem ipsum dolor <br />
          sit amet
        </h1>
        <p className="text-[20px] text-[#222222] font-['Inter'] font-semibold tracking-[-0.02em] mb-6">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur.
          Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant.
          In urna tellus nisi platea morbi libero imperdiet neque. Justo
          suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices
          etiam nulla habitasse.
        </p>

        {/* Input and Submit */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 w-full sm:w-[300px] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1959AC] text-sm"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#1959AC] text-white px-10 py-3 rounded-lg hover:opacity-90 transition text-sm font-semibold flex items-center gap-2"
          >
            Submit <FaArrowRight />
          </button>
        </div>

        {/* Error/Success Message */}
        {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
        {success && (
          <p className="text-green-600 text-sm mt-2">
            Successfully subscribed to our newsletter!
          </p>
        )}

        {/* No credit card note */}
        <div className="flex items-center gap-2 mt-4 text-[#1959AC] text-sm font-medium">
          <FaCheckCircle className="text-[#1959AC]" />
          <span>No credit card required!</span>
        </div>
      </div>

      {/* Right Side: Hero Image */}
      <div className="relative w-full md:w-1/2 h-[100vh] -mt-[12vh]">
        <Image
          src="/images/Hero-Image.svg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-t from-[#f7f6fb] to-transparent" />
      </div>
    </motion.div>
  );
};

export default Hero;
