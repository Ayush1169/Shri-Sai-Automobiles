"use client";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "John Doe",
  },
  {
    id: 2,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "Jane Smith",
  },
  {
    id: 3,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Alice Johnson",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonial"
     className="w-full py-12 bg-[#f5f5f5] font-[Plus_Jakarta_Sans]">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#6cbc8c]">
          TESTIMONIALS
        </h2>
        <p className="text-xl md:text-2xl font-medium text-black mt-2">
          What Our Clients Say
        </p>
      </div>

      {/* Desktop Slider */}
      <div className="relative items-center justify-center mt-10 hidden md:flex">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 md:left-10 bg-[#6cbc8c] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          ◀
        </button>

        {/* Cards */}
        <div className="flex gap-6 transition-all duration-500">
          {testimonials.map((item, index) => {
            let isActive = index === current;
            return (
              <div
                key={item.id}
                className={`${
                  isActive ? "scale-105 opacity-100" : "scale-90 opacity-70"
                } bg-[#6cbc8c] rounded-xl p-6 w-[280px] md:w-[320px] text-center text-white transition-all duration-500`}
              >
                <p className="text-sm md:text-base italic mb-4">“{item.text}”</p>
                <h4 className="font-bold">{item.name}</h4>
              </div>
            );
          })}
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 md:right-10 bg-[#6cbc8c] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          ▶
        </button>
      </div>

      {/* Mobile Slider */}
      <div className="relative flex items-center justify-center mt-10 md:hidden">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-2 bg-[#6cbc8c] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          ◀
        </button>

        {/* Single Card */}
        <div className="bg-[#6cbc8c] rounded-xl p-6 w-[260px] text-center text-white transition-all duration-500">
          <p className="text-sm italic mb-4">“{testimonials[current].text}”</p>
          <h4 className="font-bold">{testimonials[current].name}</h4>
        </div>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-2 bg-[#6cbc8c] text-white p-2 rounded-full hover:opacity-80 transition"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-[#6cbc8c]" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
