import React from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import bgImg from "../../../../public/footer-img.png";

export default function Footer() {
  return (
    <footer
      className="py-24 text-white"
      style={{
        backgroundImage: `url(${bgImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col  items-start ml-8 lg:ml-0">
          <Image
            src={logo}
            width={150}
            height={150}
            alt="Logo"
            className="mb-8"
          />

          {/* Buttons Section */}
          <div className="flex flex-wrap gap-4 mb-8">
            <button className="bg-transparent border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
              Sponsor or Partner →
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
              Exhibit (Small Businesses & Artists) →
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
              Learn More →
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-md text-white hover:bg-white hover:text-black transition">
              Join Ticket Waitlist →
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center bg-opacity-70 p-8 rounded-md">
          <p className="text-lg mb-4">
            We can not wait to see you in Washington, DC!
          </p>
          <h3 className="text-4xl font-bold uppercase mb-8">
            Sign Up for Updates
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full lg:w-1/2 px-4 py-3 rounded-md text-black"
            />
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full lg:w-1/2 px-4 py-3 rounded-md text-black"
            />
          </div>
          <button className="w-full  bg-primary_bg text-black font-bold px-6 py-3 mt-4 rounded-md hover:bg-yellow-600">
            Subscribe
          </button>
        </div>

        <div>
            {/* Email Section */}
        <div className="flex items-center gap-4 mt-4 ml-8">
          {/* <FaEnvelope className="text-2xl" /> */}
          <p>
            Email:{" "}
            <a href="mailto:hello@celebratedc.com" className="underline">
              hello@celebratedc.com
            </a>
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6 mt-8">
          <a
            href="https://instagram.com"
            target="_blank"
            className="text-white text-3xl"
          >
            {/* <FaInstagram /> */}
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            className="text-white text-3xl"
          >
            {/* <FaTiktok /> */}
          </a>
        </div>
        </div>
      </div>
    </footer>
  );
}
