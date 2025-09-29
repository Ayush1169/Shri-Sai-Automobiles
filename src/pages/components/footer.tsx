// components/Footer.tsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-[#000000] font-['Plus Jakarta Sans',sans-serif]">
      {/* Green Header */}
      <div
        className="bg-[#34b714] text-white text-center py-[33px] px-[30px]"
        style={{ fontWeight: "600", fontSize: "18px" }}
      >
        Stay connected with us!
      </div>

      {/* Footer Content */}
      <div className="max-w-[1162px] mx-auto px-[20px] sm:px-[30px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
          {/* Company */}
          <div>
            <h3 className="font-bold text-[16px]">Company</h3>
            <ul className="mt-2 space-y-1 text-[#000000b3]">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* Scooters */}
          <div>
            <h3 className="font-bold text-[16px]">Scooters</h3>
            <ul className="mt-2 space-y-1 text-[#000000b3]">
              <li><a href="#">E-Zulu</a></li>
              <li><a href="#">Zing</a></li>
            </ul>
          </div>

          {/* 3 Wheelers */}
          <div>
            <h3 className="font-bold text-[16px]">3 Wheelers</h3>
            <ul className="mt-2 space-y-1 text-[#000000b3]">
              <li><a href="#">Safar Smart</a></li>
              <li><a href="#">Super DXX</a></li>
              <li><a href="#">Safar Shakti</a></li>
              <li><a href="#">Safar Jumbo Ranger</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-[16px]">Contact</h3>
            <ul className="mt-2 space-y-1 text-[#000000b3] text-sm">
              <li>Kinetic Green Energy & Power</li>
              <li>Solutions Ltd. D-1 Block,</li>
              <li>Plot No.18/2, Chinchwad,</li>
              <li>Pune - 411019, Maharashtra, INDIA</li>
              <li className="mt-2 font-semibold text-[#000000]">
                1800-120-4242
              </li>
              <li>
                <a href="mailto:hello@kineticgreen.com">
                  hello@kineticgreen.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons + Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pb-6 gap-4 sm:gap-0">
          <p className="text-xs font-semibold text-[#000000b3] text-center sm:text-left">
            © 2025 Shri Sai Automobiles. Designed By{" "}
            <a
              href="https://portfolio-mgcu.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Ayush
            </a>
          </p>

          <div className="flex space-x-3">
            {/* Facebook Icon */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-[#000000]"
                viewBox="0 0 24 24"
              >
                <path d="M22.675 0h-21.35C.592 0 0 .593 0 1.326v21.348C0 23.407.592 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.796.716-1.796 1.765v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.407 24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>

            {/* Instagram Icon */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="text-[#000000]"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.366.062 2.633.343 3.608 1.318.975.975 1.256 2.242 1.318 3.608.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.343 2.633-1.318 3.608-.975.975-2.242 1.256-3.608 1.318-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.343-3.608-1.318-.975-.975-1.256-2.242-1.318-3.608C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.062-1.366.343-2.633 1.318-3.608C4.563 2.613 5.83 2.332 7.196 2.27 8.462 2.212 8.846 2.2 12 2.2zm0-2.2C8.735 0 8.332.012 7.052.07 5.77.127 4.58.368 3.515 1.433 2.45 2.498 2.21 3.688 2.153 4.97.012 8.332 0 8.735 0 12s.012 3.668.07 4.948c.057 1.282.297 2.472 1.362 3.537 1.065 1.065 2.255 1.305 3.537 1.362 1.28.058 1.683.07 4.948.07s3.668-.012 4.948-.07c1.282-.057 2.472-.297 3.537-1.362 1.065-1.065 1.305-2.255 1.362-3.537.058-1.28.07-1.683.07-4.948s-.012-3.668-.07-4.948c-.057-1.282-.297-2.472-1.362-3.537C19.42.368 18.23.127 16.948.07 15.668.012 15.265 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
