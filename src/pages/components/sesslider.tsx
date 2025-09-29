import React, { useState } from 'react';
import Image from 'next/image';

const scootyData = [
  {
    id: 'eagle',
    name: 'Eagle',
    image: '/scooty/home-p-eagle.png',
    battery: '72 V 51 Ah',
    speed: '72 Km/Hr',
    batteryType: 'Lithium-ion',
    warranty: 'Upto 3 years',
  },
  {
    id: 'eagle-plus',
    name: 'Eagle Plus',
    image: '/scooty/home-p-eagle-plus.png',
    battery: '60 V 45 Ah',
    speed: '65 Km/Hr',
    batteryType: 'Lithium-ion',
    warranty: 'Upto 2 years',
  },
  {
    id: 'hobby',
    name: 'Hobby',
    image: '/scooty/home-p-hobby.png',
    battery: '48 V 35 Ah',
    speed: '55 Km/Hr',
    batteryType: 'Lithium-ion',
    warranty: 'Upto 2 years',
  },
  {
    id: 'tuff',
    name: 'Tuff',
    image: '/scooty/home-p-tuff.png',
    battery: '72 V 60 Ah',
    speed: '75 Km/Hr',
    batteryType: 'Lithium-ion',
    warranty: 'Upto 3 years',
  },
];

export default function ScootySection() {
  const [selected, setSelected] = useState(scootyData[0]);

  return (
    <div className="bg-[#f4f4f4] py-10">
      {/* Main Section */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between bg-[#f4f4f4] px-4 md:px-6">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={selected.image}
            alt={selected.name}
            width={588}
            height={410}
            className="object-contain max-w-full h-auto"
          />
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-1/2 pl-0 lg:pl-[55px] text-center lg:text-left">
          <h2 className="text-[36px] md:text-[48px] font-bold text-[#212121] font-['Be Vietnam Pro']">
            {selected.name}
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#212121] font-['Be Vietnam Pro'] mt-2">
            High Speed Electric Scooter
          </p>
          <p className="text-[22px] md:text-[28px] font-bold text-[#212121] font-['Be Vietnam Pro'] mt-4">
            Price on Request
          </p>

          <div className="mt-4 space-y-1 text-[#212121] font-['Be Vietnam Pro'] text-[14px] md:text-[16px]">
            <p><strong>Battery Capacity:</strong> {selected.battery}</p>
            <p><strong>Max Speed:</strong> {selected.speed}</p>
            <p><strong>Battery Type:</strong> {selected.batteryType}</p>
            <p><strong>Warranty:</strong> {selected.warranty}</p>
          </div>
        </div>
      </div>

      {/* Scooty Thumbnail List */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-wrap justify-center gap-4 bg-[#f4f4f4] px-4">
        {scootyData.map((scooty) => (
          <div
            key={scooty.id}
            onClick={() => setSelected(scooty)}
            className={`cursor-pointer p-2 rounded-md transition-all duration-200 ${
              selected.id === scooty.id ? 'ring-2 ring-black' : ''
            }`}
          >
            <Image
              src={scooty.image}
              alt={scooty.name}
              width={200}
              height={114}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
