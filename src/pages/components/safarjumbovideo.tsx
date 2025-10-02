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
          src="/videos/VID-20250930-WA0004.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default WhatsAppVideoPage
