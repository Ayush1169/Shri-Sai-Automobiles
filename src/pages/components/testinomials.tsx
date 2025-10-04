"use client";
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    text: "I bought this vehicle because it felt special, I was attracted to the features it provided. vehicle runs great.",
    name: "KIRTI LAL SAHU",
    vehicle: "safar smart limited edition",
  },
  {
    id: 2,
    text: "Vehicle is very spacious and is very comfortable",
    name: "Ramlal Sao",
    vehicle: "safar smart",
  },
  {
    id: 3,
    text: "Helps me save money, vehicle charges quickly, and is super solid and stable",
    name: "Ravi Narayan Gupta",
    vehicle: "safar smart",
  },
  {
    id: 4,
    text: "Been using this vehicle for 4+ years, still delivers 80+ kms of range. Saved a lot of money compared to petrol vehicle",
    name: "Damru Sahu",
    vehicle: "safar smart",
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevSlide = () => {
    setDirection("left");
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setDirection("right");
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="testimonial"
      className="w-full py-12 bg-[#f5f5f5] font-[Plus_Jakarta_Sans]"
    >
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
                  isActive ? "scale-105 opacity-100" : "scale-90 opacity-50"
                } bg-[#6cbc8c] rounded-xl p-6 w-[280px] md:w-[320px] text-center text-black transition-all duration-500 transform ${
                  isActive
                    ? direction === "right"
                      ? "animate-slideInRight"
                      : "animate-slideInLeft"
                    : ""
                }`}
              >
                <p className="text-sm md:text-base italic mb-4">“{item.text}”</p>
                <h4 className="font-bold">{item.name}</h4>
                <p className="text-xs mt-2">{item.vehicle}</p>
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
        <div
          key={testimonials[current].id}
          className={`bg-[#6cbc8c] rounded-xl p-6 w-[260px] text-center text-black transition-all duration-500 transform ${
            direction === "right"
              ? "animate-slideInRight"
              : "animate-slideInLeft"
          }`}
        >
          <p className="text-sm italic mb-4">“{testimonials[current].text}”</p>
          <h4 className="font-bold">{testimonials[current].name}</h4>
          <p className="text-xs mt-2">{testimonials[current].vehicle}</p>
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
            onClick={() => {
              setDirection(index > current ? "right" : "left");
              setCurrent(index);
            }}
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
