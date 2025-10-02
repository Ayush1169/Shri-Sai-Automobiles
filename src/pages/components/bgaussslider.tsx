"use client"
import React, { useState } from "react"
import Image from "next/image"
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline"

const slides = [
  {
    id: 1,
    img: "/images/white-min-1-min.webp",
    title: "BG RUV 350i EX",
    specs: [
      "105* km ARAI Certified Range",
      "2.3Kwh Battery",
      "Lightweight and compact design",
      "Fast charging enabled",
      "Ideal for urban commute",
    ],
  },
  {
    id: 2,
    img: "/images/red-min-2-min.webp",
    title: "BG RUV 350 MAX",
    specs: [
      "145* km ARAI Certified Range",
      "3Kwh Battery (Non-removable battery)",
      "High-performance motor",
      "Long-distance travel ready",
      "Smart connectivity features",
    ],
  },
]

const BgaussSlider = () => {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#eaffea] transition-all duration-700 px-4 py-8 relative">
      {/* Top Heading */}
      <h2
        style={{
          color: "#373737",
          fontFamily: "Montserrat, sans-serif",
          fontSize: "26px",
          fontWeight: 700,
          marginBottom: "24px",
          textAlign: "center",
        }}
      >
        Here’s more information about India’s first RUV
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-12 relative">
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          <h1
            style={{
              color: "#373737",
              fontFamily: "Montserrat, sans-serif",
              fontSize: "32px",
              lineHeight: "40px",
            }}
            className="font-bold transition-all duration-700 md:text-[36px] md:leading-[46px] lg:text-[42px] lg:leading-[51.2px]"
          >
            {slides[current].title}
          </h1>
          <ul className="mt-4 space-y-2">
            {slides[current].specs.map((point, index) => (
              <li
                key={index}
                style={{
                  color: "#373737",
                  fontFamily: "Montserrat, sans-serif",
                }}
                className="text-[16px] leading-[24px] md:text-[18px] md:leading-[26px] lg:text-[20px] lg:leading-[29.54px]"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center relative">
          <Image
            src={slides[current].img}
            alt={`Slide ${current + 1}`}
            width={724}
            height={576}
            className="object-contain transition-opacity duration-700 w-full max-w-[500px] lg:max-w-[724px]"
            priority
          />

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-[-40px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ArrowLeftIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-[-40px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ArrowRightIcon className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default BgaussSlider
