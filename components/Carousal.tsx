"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const slides = [
  {
    video:
      "https://www.systemsltd.com/sites/default/files/2024-03/City%20Scape%205%20sec.mp4",
    heading: `We reimagine tommorrow`,
    text: "Experience the best services with us.",
    button: "Get in Touch",
  },
  {
    video:
      "https://www.systemsltd.com/sites/default/files/2025-03/Gen%20AI%20Pg%205.mp4",
    heading: "Innovate with Confidence",
    text: "We empower your business through technology.",
    button: "Learn More",
  },
];

export default function VideoCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  const navigate = useRouter();
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 z-[100] flex px-4">
            <div className="absolute top-[40%] left-8 md:left-34 text-white max-w-[90%] sm:max-w-[70%] lg:max-w-[60%]">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 leading-tight">
                {slide.heading}
              </p>
              <p className="text-base sm:text-lg md:text-xl mb-6">
                {slide.text}
              </p>
              <Link
              style={{textDecoration:'none'}}
                href={
                  slide.button === "Get in Touch"
                    ? ("/contact-us")
                    : ("/learn-more")
                }
                className="bg-white text-black text-sm sm:text-base font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded hover:bg-opacity-80 transition"
              >
                {slide.button.toUpperCase()}
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 z-[10] text-gray-500 cursor-pointer left-4 sm:left-10 transform -translate-y-1/2  bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-3 rounded-full"
      >
        <ChevronLeft size={38} className="sm:size-30" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 z-[10] right-4 sm:right-10 transform cursor-pointer -translate-y-1/2 text-gray-500  bg-opacity-30 hover:bg-opacity-60 p-2 sm:p-3 rounded-full"
      >
        <ChevronRight size={38} className="sm:size-30" />
      </button>
    </div>
  );
}

// import React from 'react'

// const Carousal = () => {
//   return (
// <div className="webgl-canvas-container svelte-1tvxrr"><canvas width="1901" height="868" style={{width: '1901.25px',height: '868.75px' ,maxWidth: '1521px', maxHeight:' 695px'}}></canvas></div>  )
// }

// export default Carousal