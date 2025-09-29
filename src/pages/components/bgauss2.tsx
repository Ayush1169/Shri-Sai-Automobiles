"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

const slides = [
  {
    id: 1,
    img: "/scooty/s4.png",
    title: "BG C12i EX",
    specs: [
      "85* km ARAI Certified Range",
      "2.0Kwh Battery",
      "Lightweight and compact design",
      "Fast charging enabled",
      "Ideal for urban commute",
    ],
  },
  {
    id: 2,
    img: "/scooty/s2-min-1.webp",
    title: "BG MAX C12i 2.0",
    specs: [
      "123* km ARAI Certified Range",
      "2.7Kwh Removable Battery",
      "High-performance motor",
      "Long-distance travel ready",
      "Smart connectivity features",
    ],
  },
  {
    id: 3,
    img: "/scooty/b2-min.png",
    title: "BG MAX C12 3.0",
    specs: [
      "123* km ARAI Certified Range",
      "2.7Kwh Battery (Removable battery)",
      "Lightweight and compact design",
      "Fast charging enabled",
      "Ideal for urban commute",
    ],
  },
]

const BgaussSlider = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) // 4 sec auto slide
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#ffffff] transition-all duration-700 px-4 py-8">
      {/* Top Heading */}
      <h2
        style={{
          color: "#373737",
          fontFamily: "Montserrat, sans-serif",
        }}
        className="text-[20px] md:text-[24px] lg:text-[26px] font-bold mb-6 text-center"
      >
        The BG MAX C12. Sab ke liye kuch extra.
      </h2>

      {/* Main Content */}
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-2 md:px-8 lg:px-12">
        {/* Left Text Section */}
        <div className="text-center lg:text-left">
          <h1
            style={{
              color: "#373737",
              fontFamily: "Montserrat, sans-serif",
            }}
            className="font-bold transition-all duration-700 text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] lg:text-[42px] lg:leading-[51.2px]"
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
        <div className="flex justify-center">
          <Image
            src={slides[current].img}
            alt={`Slide ${current + 1}`}
            width={724}
            height={576}
            className="object-contain transition-opacity duration-700 w-full max-w-[450px] md:max-w-[600px] lg:max-w-[724px]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default BgaussSlider
