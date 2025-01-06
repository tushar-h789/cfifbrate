"use client";

import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import BarIcon from "../../../../public/icons/bar-icon"; // assuming this is an SVG or component

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to control mobile menu

  const navItems = [
    { name: "The Experience", href: "#experience" },
    { name: "About", href: "#about" },
    { name: "Featured Collaborators", href: "#collaborators" },
    { name: "Partner or Sponsor", href: "#sponsor" },
    { name: "Exhibit", href: "#exhibit" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative w-full">
      {/* Full-Width Banner Section */}
      <section className="w-full h-[80vh] md:h-[85vh] lg:h-[100vh] relative">
        <video
          className="w-full h-full object-cover object-left md:object-center relative"
          autoPlay
          loop
          muted
          playsInline
          poster="/banner-placeholder.jpg"
        >
          <source src="/bg.mp4" type="video/mp4" />
          <source src="/bg.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Text Over Video Section */}
        <div className="absolute top-1/2 left-0 w-full transform -translate-y-1/2 px-4">
          <div className="container mx-auto text-center md:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold font-hind text-white leading-snug">
              The <br className="" /> Experience
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase text-primary_text bg-secondary_text mt-6 md:mt-10 mx-auto md:mx-0 px-4 py-2 rounded-md inline-block leading-relaxed">
              An Immersive Discovery <br className="hidden lg:block" /> of The
              Pearl DC!
            </p>
          </div>
        </div>

        {/* Navbar Section (Overlay) */}
        <nav className="absolute top-0 left-0 w-full">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo Section */}
            <div>
              <Link href="/" aria-label="Homepage">
                <Image src={logo} width={100} alt="CFIFBRATE Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex">
              <ul className="flex items-center gap-7 font-sans font-medium text-lg lg:text-2xl text-primary_text">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    className="hover:border-b-2 hover:border-[#64C2C9] cursor-pointer transition-all duration-200 ease-in-out"
                  >
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? (
                  <p className="text-primary_text text-2xl">X</p>
                ) : (
                  <BarIcon className="w-10 text-primary_text" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white w-full px-6 py-4 shadow-lg z-50">
              <ul className="flex flex-col gap-4 text-secondary_text font-medium text-lg">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="block hover:text-[#64C2C9] transition duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </section>
    </div>
  );
}
