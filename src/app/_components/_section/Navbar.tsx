import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
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
      <section className="w-full h-[70vh] md:h-[85vh] lg:h-[100vh] relative">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="/banner-placeholder.jpg"
        >
          <source src="/banner-video.mp4" type="video/mp4" />
          <source src="/banner-video.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>

        {/* Navbar Section (Overlay) */}
        <nav className="absolute top-0 left-0 w-full">
          <div className="container mx-auto flex justify-between items-center py-4 px-6">
            {/* Logo Section */}
            <div>
              <Link href="/" aria-label="Homepage">
                <Image src={logo} width={100} alt="CFIFBRATE Logo" />
              </Link>
            </div>

            {/* Navigation Links */}
            <div>
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
          </div>
        </nav>
      </section>
    </div>
  );
}
