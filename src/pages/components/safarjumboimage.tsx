"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl lg:text-[50px] font-bold mb-2"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#000000",
          }}
        >
          Har Safar
        </h1>
        <p
          className="text-xl sm:text-2xl lg:text-[32px]"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            color: "#000000",
          }}
        >
          Kaamiyaabi ka
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-4 items-start">
          <Image
            src="/safarjumbo/7_webthumb_1736925221.jpg"
            alt="Scooty"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
          <Image
            src="/safarjumbo/8_webthumb_1736925221.jpg"
            alt="Bike"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
        </div>

        {/* Center Video with Overlay */}
        <div className="flex justify-center relative">
          <video
            ref={videoRef}
            src="/videos/Safar Jumbo Final  1920 x 1080 px_web_1698065589.mp4"
            width={597.84}
            height={378.04}
            className="rounded-md object-cover w-[597.84px] h-[378.04px] max-w-full"
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />

          {/* Overlay Image */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex justify-center items-center cursor-pointer"
              onClick={handlePlayPause}
            >
              <Image
                src="/safarjumbo/Untitled design (7)_webthumb_1701167708.png"
                alt="Thumbnail"
                width={597.84}
                height={378.04}
                className="rounded-md object-cover w-[597.84px] h-[378.04px] max-w-full"
              />
              {/* Play Button Overlay */}
              <div className="absolute bg-black bg-opacity-50 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-12 h-12"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653v12.694c0 .856.92 1.39 1.667.964l10.74-6.347a1.125 1.125 0 000-1.928L6.917 4.69c-.747-.426-1.667.108-1.667.964z"
                  />
                </svg>
              </div>
            </div>
          )}

          {/* Pause Button */}
          {isPlaying && (
            <button
              onClick={handlePlayPause}
              className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white rounded-full p-2"
            >
              ❚❚
            </button>
          )}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 items-end">
          <Image
            src="/safarjumbo/5_webthumb_1736925221.jpg"
            alt="Auto"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
          <Image
            src="/safarjumbo/6_webthumb_1736925221.jpg"
            alt="Cart"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
