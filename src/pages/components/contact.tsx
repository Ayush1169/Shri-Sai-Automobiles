"use client";
import React from "react";

const ContactUs: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full py-12"
      style={{
        backgroundColor: "#eafaf4",
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        color: "#000000",
      }}
    >
      {/* Heading */}
      <h1 className="text-center font-bold text-2xl mb-8">Contact Us</h1>

      {/* Map */}
      <div className="w-full flex justify-center mb-12 px-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14677.544321850463!2d83.4099042!3d21.8790063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2556e546ec6c9f%3A0x0000000000000000!2zMjHCsDUyJzQ0LjQiTiA4M8KwMjQnNTMuNyJF!5e0!3m2!1sen!2sin!4v1727500000000!5m2!1sen!2sin"
          width="1110"
          height="460"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          className="w-full max-w-[1110px] h-[260px] sm:h-[360px] lg:h-[460px]"
        ></iframe>
      </div>

      {/* Info + Form */}
      <div className="container mx-auto flex flex-col lg:flex-row gap-8 px-4 sm:px-6 lg:px-16">
        {/* Left Info Box */}
        <div
          className="shadow-md w-full lg:w-[580px]"
          style={{
            background: "#fff",
            padding: "24px",
            color: "#000000",
          }}
        >
          <h2 className="font-bold text-lg mb-4">Our Full Info</h2>
          
          <p className="font-semibold">Phone number</p>
          <p className="mb-4">
            <a href="tel:+919993519805" className="hover:underline text-black">
              (+91) 9993519805
            </a>
          </p>

          <p className="font-semibold">Email address</p>
          <p className="mb-4">
            <a href="mailto:shrisaiautomobilek@gmail.com" className="hover:underline text-black">
              shrisaiautomobilek@gmail.com
            </a>
          </p>

          <p className="font-semibold">Address info</p>
          <p className="mb-4">
            <a
              href="https://www.google.com/maps?q=VCH7+JX2,+Mini+Stadium+Road,+Raigarh,+Chhattisgarh,+India+–+496001"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-black"
            >
              VCH7+JX2, Mini Stadium Road, Raigarh, Chhattisgarh, India – 496001
            </a>
          </p>

          <p className="font-semibold">Opening Hours</p>
          <p>Mon-sun: 9 am – 6 pm</p>
        </div>

        {/* Right Form */}
        <div className="flex-1 w-full">
          <h2 className="font-bold text-lg mb-4">Get In Touch</h2>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="flex flex-col gap-4"
          >
            {/* Hidden Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="bd867502-80e6-4344-8d12-c38e491b281e"
            />
            {/* Hidden Email (receiver) */}
            <input
              type="hidden"
              name="to"
              value="shrisaiautomobilekg@gmail.com"
            />

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-300"
              style={{ backgroundColor: "#fafafa", color: "#000000" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full p-3 border border-gray-300"
              style={{ backgroundColor: "#fafafa", color: "#000000" }}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full p-3 border border-gray-300"
              style={{ backgroundColor: "#fafafa", color: "#000000" }}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="w-full p-3 border border-gray-300"
              style={{ backgroundColor: "#fafafa", color: "#000000" }}
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full p-3 border border-gray-300 h-32"
              style={{ backgroundColor: "#fafafa", color: "#000000" }}
            ></textarea>
            <button
              type="submit"
              className="text-white font-semibold py-3 px-6"
              style={{ backgroundColor: "#248f59" }}
            >
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
