"use client";

import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-3xl sm:text-4xl lg:text-[50px] font-bold mb-2"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#000000" }}
        >
          Sleek, Sharp
        </h1>
        <p
          className="text-xl sm:text-2xl lg:text-[32px]"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#000000" }}
        >
          and packed with features
        </p>
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-4 items-start">
          <Image
            src="/images/Flex_web_1698069293.jpg"
            alt="Scooty"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
          <Image
            src="/images/Safar-Smart_homepage_gall1_web_1696740239.jpg"
            alt="Bike"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
        </div>

        {/* Center Video */}
        <div className="flex justify-center">
          <video
            src="/videos/WhatsApp Video 2025-09-27 at 18.17.35_59d48709.mp4"
            width={820}
            height={480}
            controls
            className="rounded-md object-cover w-full h-auto"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 items-end">
          <Image
            src="/images/Zoom-Cover-4_web_1705396692.jpg"
            alt="Auto"
            width={360}
            height={200}
            className="object-cover w-full h-auto rounded-md"
          />
          <Image
            src="/images/Banner 1_web_1697864854_web_1707063723.jpg"
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
