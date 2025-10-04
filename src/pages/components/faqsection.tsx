import React, { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'How to reach customer support? I am facing issues with battery recharge.',
    answer: 'You can contact customer care via the Kinetic Green app or helpline number for quick resolution.'
  },
  {
    question: 'How is the built quality? Is the two-wheeler compatible with Indian uneven roads?',
    answer: 'Yes, the scooter is built to handle Indian roads and comes with a strong suspension system.'
  },
  {
    question: 'It is recommended to use a charger of the same brand as the scooter, Does Kinetic Green have charging stations in India?',
    answer: 'Yes, Kinetic Green is continuously expanding its charging station network across India.'
  }
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-20 py-10">
      
      {/* Left Section */}
      <div className="flex flex-col items-start">
        <h1
          className="text-[50px] font-bold font-['Plus_Jakarta_Sans',_sans-serif] text-[#000000] mb-[42px]"
        >
          FAQ’s of Electric Vehicle
        </h1>

        {/* Green Background with Image */}
        <div
          className="w-[340px] h-[317px] bg-[#66ae30] relative overflow-hidden flex items-end justify-center"
        >
          <Image
            src="/images/faq.png"
            alt="EV Scooter"
            width={340}
            height={317}
            className="absolute bottom-0"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-10 lg:mt-0 lg:ml-12 flex-1 w-full max-w-[700px]">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-start cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <p className="text-[#24272c] text-[24px] font-bold font-['Plus_Jakarta_Sans',_sans-serif] pr-4">
                {faq.question}
              </p>
              <button
                className="w-[28px] h-[28px] text-[#24272c] font-bold text-xl leading-none"
              >
                {activeIndex === index ? '-' : '+'}
              </button>
            </div>
            {activeIndex === index && (
              <p className="text-[#24272cb2] font-['Plus_Jakarta_Sans',_sans-serif] mt-[4px] mb-[16px]">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
