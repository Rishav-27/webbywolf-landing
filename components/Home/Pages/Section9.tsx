"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Section9 = () => {
  const tabs = ["Research", "Plan", "Design"] as const;
  type TabType = (typeof tabs)[number];

  const [activeTab, setActiveTab] = useState<TabType>("Research");

  const tabContent: Record<TabType, string> = {
    Research:
      "This is the content for Research. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur euismod nulla vitae libero sagittis dapibus.",
    Plan:
      "This is the content for Plan. Vivamus porta lacus a nibh consectetur, nec suscipit turpis ultrices.",
    Design:
      "This is the content for Design. Maecenas feugiat neque vel ligula tincidunt, ut suscipit sapien pulvinar.",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full px-6 py-20 bg-white"
    >
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left Column */}
        <div className="w-full ml-5 md:w-6/12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-6 font-['Roboto_Condensed']">
            LOREM IPSUM DOLOR SIT AMET
          </h2>

          {/* Tabs */}
          <div className="flex w-full max-w-xl border border-gray-200 rounded-md overflow-hidden mb-6 bg-white">
            {tabs.map((label) => (
              <div
                key={label}
                onClick={() => setActiveTab(label)}
                className={`flex-1 text-center px-6 py-4 text-base font-semibold cursor-pointer transition-colors duration-200 ${
                  activeTab === label ? "bg-[#F9FAFB]" : "bg-white"
                } hover:bg-[#F9FAFB] text-[#222]`}
              >
                {label}
              </div>
            ))}
          </div>

          {/* Dynamic Content */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="text-[#444] text-base leading-relaxed mb-4"
            >
              {tabContent[activeTab]}
            </motion.p>
          </AnimatePresence>

          {/* Link */}
          <a
            href="#"
            className="text-[#1959AC] font-semibold text-sm inline-flex items-center gap-1 hover:underline"
          >
            Check tools →
          </a>
        </div>

        {/* Right Column - Static Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full md:w-6/12 flex justify-center"
        >
          <Image
            src="/images/Section9-Image.svg"
            alt="Section 9 Illustration"
            width={500}
            height={200}
            className="object-cover"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Section9;
