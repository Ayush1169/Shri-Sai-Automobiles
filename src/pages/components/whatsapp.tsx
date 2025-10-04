// components/WhatsappButton.tsx
import React from "react";

const WhatsappButton = () => {
  const phoneNumber = "+919993519805"; // ← change this to your number (with country code, no +)
  const message = "Hi, I'm interested in your Vechiles!"; // Optional default message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <div className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48a11.74 11.74 0 00-16.61 0A11.74 11.74 0 002 12.07a11.58 11.58 0 001.61 5.95L2 22l4.1-1.57a11.74 11.74 0 0014.42-16.95zm-8.42 15.6a9.2 9.2 0 01-4.71-1.3l-.34-.2-2.79 1 .93-2.9-.22-.35a9.3 9.3 0 011.38-11.3 9.26 9.26 0 0113.1 0 9.3 9.3 0 01-7.35 14.05zm5.1-6.91c-.27-.14-1.63-.8-1.88-.89s-.44-.13-.63.14-.72.88-.88 1.07-.32.2-.59.07a7.49 7.49 0 01-2.22-1.37 8.35 8.35 0 01-1.54-1.91c-.16-.27 0-.42.12-.57s.27-.32.4-.48a1.89 1.89 0 00.27-.45.5.5 0 000-.48c-.13-.14-.63-1.52-.87-2.08s-.46-.47-.63-.48h-.53a1 1 0 00-.72.33 3 3 0 00-.94 2.21 5.2 5.2 0 001.1 2.61 11.87 11.87 0 004.57 4.25 13.12 13.12 0 002.28.84 5.47 5.47 0 002.51.16 2.71 2.71 0 001.78-1.24 2.2 2.2 0 00.16-1.24c-.07-.11-.24-.18-.5-.32z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsappButton;
