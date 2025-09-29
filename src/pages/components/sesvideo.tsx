"use client"
import React from "react"

const ShemaVideoPage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-[1216.8px] h-[623.2px] object-cover"
      >
        <source src="/videos/homepage-new.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default ShemaVideoPage
