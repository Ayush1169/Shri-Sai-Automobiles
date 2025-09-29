"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    }, 4000) // 4 sec auto slide
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#eaffea] transition-all duration-700 px-4 py-8">
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
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-4 lg:px-12">
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
        <div className="flex justify-center">
          <Image
            src={slides[current].img}
            alt={`Slide ${current + 1}`}
            width={724}
            height={576}
            className="object-contain transition-opacity duration-700 w-full max-w-[500px] lg:max-w-[724px]"
            priority
          />
        </div>
      </div>
    </div>
  )
}

export default BgaussSlider
