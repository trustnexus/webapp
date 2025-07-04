"use client";
import Help from "@/components/Help";
import React from "react";

const page = () => {
  return (
    <>
      {/* 🔹 HERO SECTION WITH VIDEO BACKGROUND */}
      <div className="relative w-full h-[550px] overflow-hidden">
        <video
          src="/webapps.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Build Modern Web Applications That Drive Growth
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-[600px] mx-auto">
              From intuitive UIs to scalable backends, we develop powerful,
              secure, and future-ready web applications.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 SECOND SECTION: TEXT + IMAGE */}
      <section className="py-20 px-4 relative bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* Text Content */}
          <div className="md:w-1/2 z-10">
            <p className="text-sm text-blue-600 mb-2">
              🚀 DIGITAL TRANSFORMATION
            </p>
            <p className="text-3xl sm:text-[50px] font-light mb-4">
              Digitally Transform Your Business with Custom Web Solutions
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Our team builds custom web applications tailored to your goals —
              be it automating internal workflows, building client portals, or
              scaling ecommerce platforms. We use the latest frameworks and
              secure coding practices to ensure performance, scalability, and
              robustness.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative lg:absolute lg:-bottom-40 lg:right-5 overflow-hidden z-0 w-full flex justify-center">
            <img
              src="https://cdn-hokdj.nitrocdn.com/xTVZIceRirelUWcvTeSrIReGRrnfbTIP/assets/images/optimized/rev-7ea8b12/www.instinctools.com/wp-content/uploads/2024/05/custom-web-app-development-services-img3.jpg"
              alt="Custom Web Solutions"
              className="hover:scale-125 h-[400px] sm:h-[500px] duration-300 shadow-md  object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔹 THIRD SECTION: IMAGE + TEXT (Reversed Layout) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Image Left */}
          <div className="md:w-1/2 overflow-hidden [-10">
            <img
              src="https://vincelogodesign.com/wp-content/uploads/2025/01/4231.jpg"
              alt="Responsive Design"
              className=" hover:scale-125 h-[500px] duration-300 shadow-md"
            />
          </div>

          {/* Text Right */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">📱 RESPONSIVE DESIGN</p>
            <p className="text-3xl sm:text-[50px] font-light mb-4">
              Seamless Experiences Across Devices
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              In today's world, web applications must look and feel native
              across all screen sizes. We create responsive and adaptive designs
              that deliver optimal performance and engagement — whether on a
              desktop, tablet, or mobile device.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
              With cross-browser and cross-platform compatibility, your users
              enjoy a frictionless experience everywhere.
            </p>
          </div>
        </div>
      </section>
      <Help />
    </>
  );
};

export default page;
