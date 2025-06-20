'use client';
import Image from "next/image";
import React from "react";

const Section14 = () => {
  return (
    <div className="bg-[#171E2B] text-white w-full min-h-screen px-6 md:px-12 py-14 flex flex-col justify-start">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="flex flex-wrap md:flex-nowrap gap-10 items-start">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/Logo.svg" alt="Logo" width={140} height={60} />
          </div>

          {/* Column 1 */}
          <div className="ml-20 mt-30">
            <span className="text-lg font-bold mb-4 inline-block">Lorem ipsum</span>
            <ul className="space-y-2">
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, i) => (
                <li
                  key={i}
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer hover:text-[#1959AC]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div className="ml-20 mt-30">
            <span className="text-lg font-bold mb-4 inline-block">Lorem ipsum</span>
            <ul className="space-y-2">
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, i) => (
                <li
                  key={i}
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer hover:text-[#1959AC]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div className="ml-20 mt-30">
            <span className="text-lg font-bold mb-4 inline-block">Lorem ipsum</span>
            <ul className="space-y-2">
              {["Lorem ipsum", "Lorem ipsum", "Lorem ipsum"].map((item, i) => (
                <li
                  key={i}
                  className="hover:scale-105 transition-transform duration-200 cursor-pointer hover:text-[#1959AC]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div className="ml-20 mt-30">
            <span className="text-lg font-bold mb-4 inline-block">Lorem ipsum</span>
            <ul className="space-y-2">
              <li className="hover:scale-105 transition-transform duration-200 cursor-pointer hover:text-[#1959AC]">
                Lorem ipsum
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section14;
