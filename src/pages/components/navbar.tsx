"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  const [openScooter, setOpenScooter] = useState(false)
  const [openThree, setOpenThree] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-2">
        {/* Logo */}
        <div className="pt-[10px]">
          <Link href="/" className="inline-block">
            <Image
              src="/Logo/WhatsApp_Image_2025-09-28_at_11.34.20_eb9f1660-removebg-preview.png"
              alt="Logo"
              width={158}
              height={40}
              priority
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex space-x-8 font-[14px] font-['Plus Jakarta Sans'] transition-colors duration-300 ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {/* Scooter Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setOpenScooter(!openScooter)
                setOpenThree(false)
              }}
              className="hover:text-gray-500"
            >
              Scooter
            </button>
            {openScooter && (
              <ul className="absolute top-8 left-0 bg-black bg-opacity-80 text-white w-40 rounded-md shadow-md">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link href="/bgauss">BGAUSS</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <a
                    href="https://zelioebikes.com/dealer-locator/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ZELIO
                  </a>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link href="/ses">SHEMA ELECTRIC</Link>
                </li>
              </ul>
            )}
          </li>

          {/* 3 Wheelers Dropdown */}
          <li className="relative">
            <button
              onClick={() => {
                setOpenThree(!openThree)
                setOpenScooter(false)
              }}
              className="hover:text-gray-500"
            >
              3 Wheelers
            </button>
            {openThree && (
              <ul className="absolute top-8 left-0 bg-black bg-opacity-80 text-white w-40 rounded-md shadow-md">
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link href="/safarsmart">Safar Smart</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link href="/safarsakti">Safar Sakti</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                  <Link href="/safarjumbo">Safar Jumbo</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Testimonials */}
          <li>
            <a href="#testimonial" className="hover:text-gray-500">
              Testimonials
            </a>
          </li>

          {/* Tied Up */}
          <li>
            <a href="#tiedup" className="hover:text-gray-500">
              Tied Up
            </a>
          </li>

          {/* Contact Us */}
          <li>
            <a href="#contact" className="hover:text-gray-500">
              Contact Us
            </a>
          </li>

          {/* About Us */}
          <li>
            <a href="#aboutus" className="hover:text-gray-500">
              About Us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`text-2xl focus:outline-none ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            &#8942; {/* 3 vertical dots */}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-90 text-white px-6 py-4 space-y-4">
          <div>
            <button
              onClick={() => setOpenScooter(!openScooter)}
              className="block w-full text-left hover:text-gray-400"
            >
              Scooter
            </button>
            {openScooter && (
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/bgauss" onClick={() => setMobileMenuOpen(false)}>
                    BGAUSS
                  </Link>
                </li>
                <li>
                  <a
                    href="https://zelioebikes.com/dealer-locator/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ZELIO
                  </a>
                </li>
                <li>
                  <Link href="/ses" onClick={() => setMobileMenuOpen(false)}>
                    SHEMA ELECTRIC
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <div>
            <button
              onClick={() => setOpenThree(!openThree)}
              className="block w-full text-left hover:text-gray-400"
            >
              3 Wheelers
            </button>
            {openThree && (
              <ul className="ml-4 mt-2 space-y-2 text-sm">
                <li>
                  <Link href="/safarsmart" onClick={() => setMobileMenuOpen(false)}>
                    Safar Smart
                  </Link>
                </li>
                <li>
                  <Link href="/another-three" onClick={() => setMobileMenuOpen(false)}>
                    3 Wheeler Option 2
                  </Link>
                </li>
                <li>
                  <Link href="/third-three" onClick={() => setMobileMenuOpen(false)}>
                    3 Wheeler Option 3
                  </Link>
                </li>
              </ul>
            )}
          </div>

          <a
            href="#testimonial"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>

          <a
            href="#tiedup"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Tied Up
          </a>

          <a
            href="#contact"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </a>
          <a
            href="#about"
            className="block hover:text-gray-400"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
