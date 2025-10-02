"use client"
import React from "react"

const WhatsAppVideoPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[1216.8px] h-[623.2px] object-cover"
      >
        <source
          src="/videos/WhatsApp Video 2025-09-30 at 23.57.21_d3b8f83e.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default WhatsAppVideoPage
