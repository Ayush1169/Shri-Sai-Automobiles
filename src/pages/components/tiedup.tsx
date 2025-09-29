"use client";

import Image from "next/image";

export default function TiedUpSection() {
  const companies = [
    {
      src: "/Logo/logo.png",
      alt: "Bgauss",
      link: "https://www.bgauss.com/",
    },
    {
      src: "/Logo/web-logo-white (1).png", // ✅ renamed
      alt: "Zelio",
      link: "https://zelioebikes.com/dealer-locator/",
    },
    {
      src: "/Logo/logo (1).png", // ✅ renamed
      alt: "SES Electric",
      link: "https://www.seselectric.in/",
    },
  ];

  return (
    <section id="tiedup"
    className="bg-green-100 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 font-['Plus Jakarta Sans']">
          Companies We Work With
        </h2>

        {/* Logos */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-center">
          {companies.map((company, index) => (
            <a
              key={index}
              href={company.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <Image
                src={company.src}
                alt={company.alt}
                width={200}
                height={100}
                className="object-contain hover:scale-105 transition-transform duration-300"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
