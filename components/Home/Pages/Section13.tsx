'use client';
import Image from 'next/image';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Section13 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-4 pt-28 pb-28 bg-white">
      {/* Logo */}
      <div className="mb-8">
        <Image src="/images/Logo.svg" alt="Logo" width={140} height={60} />
      </div>

      {/* Heading */}
      <h1 className="text-[42px] font-bold tracking-[-2%] font-['Roboto_Condensed'] text-[#222222] mb-6 uppercase">
        LOREM IPSUM DOLOR SIT AMET <br /> CONSECTETUR. DUI.
      </h1>

      {/* Paragraph */}
      <p className="text-[20px] text-[#222222] font-['Inter'] font-semibold tracking-[-2%] leading-relaxed mb-10">
        Lorem ipsum dolor sit amet consectetur. Nisl faucibus <br />
        vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
      </p>

      {/* Button */}
      <button className="bg-[#1959AC] text-white px-8 py-4 rounded-md flex items-center gap-3 text-base font-semibold shadow-md hover:shadow-lg hover:bg-[#0546D2] transition-all duration-200 cursor-pointer">
  Loerum Ipsum <FaArrowRight />
</button>
    </div>
  );
};

export default Section13;
