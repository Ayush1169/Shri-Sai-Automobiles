"use client";
import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <section
      className="w-full py-12 px-4 sm:px-6 lg:px-20"
      style={{
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        color: "#ffffff",
        backgroundColor: "#000000",
      }}
    >
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8" style={{ color: "#248f59" }}>
        Terms & Conditions
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 text-base leading-relaxed">
        <p>
          Welcome to <span className="font-semibold">Shri Sai Automobile</span>. 
          By accessing or using our website, you agree to comply with and be bound 
          by the following Terms and Conditions. Please read them carefully before 
          using our services.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          1. Acceptance of Terms
        </h2>
        <p>
          By using our website and services, you acknowledge that you have read, 
          understood, and agree to be bound by these terms. If you do not agree, 
          you should not use our services.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          2. Services
        </h2>
        <p>
          We provide automobile-related products and services. We reserve the 
          right to modify, update, or discontinue any part of our services 
          without prior notice.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          3. User Responsibilities
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>You agree to provide accurate and complete information.</li>
          <li>You will not use our website for illegal or unauthorized purposes.</li>
          <li>You agree not to copy, modify, or distribute our content without permission.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          4. Payments & Refunds
        </h2>
        <p>
          Payments for our services must be made in full. Refund policies, if any, 
          will be clearly communicated at the time of purchase.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          5. Limitation of Liability
        </h2>
        <p>
          We are not responsible for any direct, indirect, or consequential damages 
          that may result from the use or inability to use our services.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          6. Privacy
        </h2>
        <p>
          Your privacy is important to us. Please refer to our{" "}
          <a href="/privacy-policy" className="underline" style={{ color: "#248f59" }}>
            Privacy Policy
          </a>{" "}
          for details on how we collect and use your information.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          7. Governing Law
        </h2>
        <p>
          These terms are governed by the laws of India. Any disputes will be 
          resolved in the courts of Raigarh, Chhattisgarh.
        </p>

        <h2 className="text-xl font-semibold mt-6" style={{ color: "#248f59" }}>
          8. Changes to Terms
        </h2>
        <p>
          We may update these Terms & Conditions at any time. Updated versions 
          will be posted on this page with the effective date.
        </p>

        <p className="mt-8 font-semibold">
          If you have any questions about these Terms & Conditions, please{" "}
          <a href="/contact" className="underline" style={{ color: "#248f59" }}>
            contact us
          </a>.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;
