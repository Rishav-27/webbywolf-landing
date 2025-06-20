'use client';
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br/> convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies <br/>ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br/> convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies <br/>ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br/> convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies <br/>ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br/> convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies <br/>ipsum.',
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur?',
    answer:
      'Lorem ipsum dolor sit amet consectetur. Vulputate amet aliquet morbi suspendisse <br/> convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies <br/>ipsum.',
  },
];

const Section12 = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 px-6 md:px-20 pt-30 pb-30">
      <h2 className="text-2xl md:text-3xl font-bold text-[#222] mb-25 font-['Roboto_Condensed'] uppercase">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
        {faqs.map((faq, index) => (
          <div key={index} className="py-6">
            <div
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="font-semibold text-[#222] text-lg">
                {faq.question}
              </h3>
              <span className="text-[#222]">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </div>

            {openIndex === index && faq.answer && (
              <div
                className="mt-4 text-[#222] text-sm leading-relaxed"
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section12;
