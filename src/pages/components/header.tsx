"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const desktopImages = [
  "/images/WhatsApp Image 2025-09-28 at 13.30.35_e09fa890.jpg",
  "/images/Zing-Web_web_1746190134.png",
  "/images/Screenshot 2025-09-28 135018.png",
]

const mobileImages = [
  "/mobile/Zing-Mobile_mobile_1746190134.png",
  "/mobile/Eluna Prime Mobile Banner_mobile_1758874845.png",
]

const Header = () => {
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

  // Auto slide every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 3000)
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
      {/* Images */}
      <div className="relative h-full w-full flex items-center justify-center">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex}`}
          fill
          priority
          className={`transition-all duration-700 ${
            isMobile ? "object-contain bg-white" : "object-cover"
          }`}
        />
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

      {/* Indicators (dots) */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </header>
  )
}

export default Header
