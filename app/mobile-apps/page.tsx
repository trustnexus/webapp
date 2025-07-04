'use client';
import Help from "@/components/Help";
import React from "react";

const page = () => {
  return (
    <>
      {/* 🔹 HERO SECTION WITH VIDEO BACKGROUND */}
      <div className="relative w-full h-[550px] overflow-hidden">
        <video
          src="/mobileapps.mp4" // Add this video to public/ folder or update path accordingly
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center px-4">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Build Smart & Scalable Mobile Applications
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-[600px] mx-auto">
              Native, hybrid, or cross-platform — we craft mobile solutions that align with your business goals and user needs.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 SECOND SECTION: TEXT + IMAGE */}
      <section className="py-20 px-4 relative bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative">
          {/* Text Content */}
          <div className="md:w-1/2 z-10">
            <p className="text-sm text-blue-600 mb-2">📱 MOBILE-FIRST STRATEGY</p>
            <p className="text-3xl sm:text-[50px] font-light mb-4">
              Your Business in Your Customer’s Pocket
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              We design and develop mobile apps that deliver exceptional user experiences and performance.
              Whether it's Android, iOS, or cross-platform using Flutter or React Native, our team builds secure,
              scalable apps that users love.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative lg:absolute lg:-bottom-20 lg:right-5 overflow-hidden z-0 w-full flex justify-center">
            <img
              src="https://cdn.dribbble.com/userupload/3963742/file/original-28be9649ef16ab2f16886b3451c552c6.png?compress=1&resize=1504x1128"
              alt="Mobile App Development"
              className="hover:scale-125 h-[400px] sm:h-[500px] duration-300 shadow-md rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔹 THIRD SECTION: IMAGE + TEXT (Reversed Layout) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Image Left */}
          <div className="md:w-1/2 overflow-hidden">
            <img
              src="https://www.zibtek.com/blog/wp-content/uploads/2020/11/mobile-application-development.png"
              alt="Cross-platform compatibility"
              className="hover:scale-125 h-[500px] duration-300 shadow-md rounded-md object-cover"
            />
          </div>

          {/* Text Right */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">⚙️ CROSS-PLATFORM POWER</p>
            <p className="text-3xl sm:text-[50px] font-light mb-4">
              Unified Experiences Across All Devices
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Reach users on any device with apps that maintain a consistent look and feel.
              We ensure seamless integration, intuitive UX, and optimized performance — all while reducing development time and cost.
            </p>
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mt-4">
              We also help with app store deployment, maintenance, and performance monitoring to ensure long-term success.
            </p>
          </div>
        </div>
      </section>

      <Help />
    </>
  );
};

export default page;
