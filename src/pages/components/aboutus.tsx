"use client";
import React from "react";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section id="aboutus"
      className="w-full py-12 px-4 sm:px-6 lg:px-16"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: "#000000" }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
          Driving excellence for over <span className="font-bold">3+ years</span>, 
          we are committed to delivering innovative solutions and trusted services 
          for all your automobile needs.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/images/WhatsApp Image 2025-09-28 at 13.30.36_fa80d27c.jpg" // replace with actual image path
            alt="About Us"
            width={500}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full max-w-[500px] h-auto"
          />
        </div>

        {/* Right Content */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4" style={{ color: "#248f59" }}>
            Who We Are
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At <span className="font-semibold">Shri Sai Automobiles</span>, we aim to make 
            every journey smooth and successful. With a strong focus on customer satisfaction, 
            we provide high-quality vehicles and reliable services that cater to all types of 
            travel needs.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our mission is simple: deliver trust, performance, and sustainability 
            while ensuring that every customer feels valued. Over the last 3+ years, 
            we’ve proudly served hundreds of happy clients across India.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            <div className="p-4 rounded-lg shadow bg-[#eafaf4]">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#248f59" }}>
                3+ Years Experience
              </h3>
              <p className="text-gray-700 text-sm">
                Established track record of reliability and customer trust.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow bg-[#eafaf4]">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#248f59" }}>
                Customer First
              </h3>
              <p className="text-gray-700 text-sm">
                We focus on delivering personalized support and care.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow bg-[#eafaf4]">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#248f59" }}>
                Quality Vehicles
              </h3>
              <p className="text-gray-700 text-sm">
                Offering trusted, safe, and efficient automobile solutions.
              </p>
            </div>
            <div className="p-4 rounded-lg shadow bg-[#eafaf4]">
              <h3 className="text-lg font-bold mb-2" style={{ color: "#248f59" }}>
                Growing Together
              </h3>
              <p className="text-gray-700 text-sm">
                Building long-term relationships with our valued clients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Want to Know More?
        </h2>
        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
          Connect with us today and let us help you find the perfect solution for your journey.
        </p>
        <a
          href="#contact"
          className="inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105"
          style={{ backgroundColor: "#248f59" }}
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default AboutUs;
