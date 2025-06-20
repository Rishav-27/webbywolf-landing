'use client';

import React from 'react';

const RequestQuote = () => {
  return (
    <div className="bg-white pt-32 pb-32 px-4 sm:px-8 md:px-16 lg:px-32 font-['Inter']">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-[#222222] mb-28 uppercase">
        Request a Quote
      </h2>

      <form className="max-w-5xl mx-auto space-y-10">
        {/* 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm text-[#222222] mb-1">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              required
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm text-[#222222] mb-1">E-mail</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm text-[#222222] mb-1">Phone Number</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            />
          </div>

          {/* Time Frame */}
          <div>
            <label htmlFor="timeframe" className="block text-sm text-[#222222] mb-1">
              Time Frame<span className="text-red-500">*</span>
            </label>
            <select
              id="timeframe"
              required
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            >
              <option value="">Choose Time Frame</option>
              <option>1 Week</option>
              <option>2–3 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>

          {/* Size */}
          <div>
            <label htmlFor="size" className="block text-sm text-[#222222] mb-1">
              Size<span className="text-red-500">*</span>
            </label>
            <select
              id="size"
              required
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            >
              <option value="">Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>

          {/* Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm text-[#222222] mb-1">
              Quantity<span className="text-red-500">*</span>
            </label>
            <select
              id="quantity"
              required
              className="w-full bg-[#F9FAFB] border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            >
              <option value="">Choose Quantity</option>
              <option>1–5</option>
              <option>5–10</option>
              <option>10+</option>
            </select>
          </div>
        </div>

        {/* Textarea */}
        <div>
          <label htmlFor="project" className="block text-sm text-[#222222] mb-1">
            Please Describe Your Project<span className="text-red-500">*</span>
          </label>
          <textarea
            id="project"
            required
            className="w-full h-48 bg-[#F9FAFB] border border-gray-300 rounded-md p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#1959AC] transition-all duration-200 hover:bg-gray-100 hover:scale-[1.01]"
            placeholder="Describe your project type..."
          />
        </div>

        {/* Terms */}
        <p className="text-center text-sm text-[#222222]">
          By submitting this form you agree to our{' '}
          <a href="#" className="underline text-[#1959AC]">Terms of Service</a> and{' '}
          <a href="#" className="underline text-[#1959AC]">Privacy Policy</a>.
        </p>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-[#1959AC] hover:bg-[#0546D2] text-white px-6 py-3 rounded-md font-medium text-sm shadow-md flex items-center gap-2 transition-transform duration-200 hover:scale-105"
          >
            Submit Quote →
          </button>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote;
