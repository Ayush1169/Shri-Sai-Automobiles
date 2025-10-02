"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const desktopImages = [
  "/safarsmart/1 copy (1)_web_1736924628.jpg",
  "/safarsmart/2 copy (1)_web_1736924628.jpg",
]

const mobileImages = [
  "/mobile/1 copy_mobile_1736924628.jpg",
  "/mobile/2 copy_mobile_1736924628.jpg",
]

const Header: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const images = isMobile ? mobileImages : desktopImages

  // Auto slide every 5 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isMobile])

  const prevSlide = () => {
    const isFirst = currentIndex === 0
    const newIndex = isFirst ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLast = currentIndex === images.length - 1
    const newIndex = isLast ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <header className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative h-full w-full">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Title */}
        <h1
          className={`font-bold mt-[-150px] md:mt-[-150px] ${
            isMobile ? "mt-[50px] text-black" : "text-white"
          } whitespace-nowrap`}
          style={{
            fontSize: isMobile ? "32px" : "54px",
            fontFamily: '"Plus Jakarta Sans", sans-serif',
            lineHeight: isMobile ? "40px" : "68px",
          }}
        >
          Safar Smart
        </h1>

        {/* Specs */}
        <div
          className={`mt-auto mb-20 ${
            isMobile
              ? "grid grid-cols-2 gap-6 text-black"
              : "flex flex-wrap justify-center gap-10 text-white"
          }`}
        >
          <div>
            <p
              className="font-semibold"
              style={{ fontSize: "22px", fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              120 Kms*
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: "14px",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: isMobile ? "#00000099" : "#ffffff99",
              }}
            >
              Range
            </p>
          </div>

          <div>
            <p
              className="font-semibold"
              style={{ fontSize: "22px", fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              Lithium Ion
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: "14px",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: isMobile ? "#00000099" : "#ffffff99",
              }}
            >
              Battery type
            </p>
          </div>

          <div>
            <p
              className="font-semibold"
              style={{ fontSize: "22px", fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              5 KWH - LFP Battery
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: "14px",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: isMobile ? "#00000099" : "#ffffff99",
              }}
            >
              Battery Capacity
            </p>
          </div>

          <div>
            <p
              className="font-semibold"
              style={{ fontSize: "22px", fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              4.5 hours*
            </p>
            <p
              className="mt-1"
              style={{
                fontSize: "14px",
                fontFamily: '"Plus Jakarta Sans", sans-serif',
                color: isMobile ? "#00000099" : "#ffffff99",
              }}
            >
              Charging time
            </p>
          </div>
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 bg-black/40 text-white p-3 rounded-full hover:bg-black/60 transition"
      >
        <ChevronRight size={28} />
      </button>
    </header>
  )
}

export default Header
