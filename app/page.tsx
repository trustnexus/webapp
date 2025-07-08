"use client";
import Navbar from "@/components/Navbar";
import React, { useEffect, useRef, useState } from "react";
import Carousal from "@/components/Carousal";
import OurServices from "@/components/OurServices";
import FeaturedInsight from "@/components/FeaturedInsight";
import Technology from "@/components/Technology";
import Careers from "@/components/Careers";
import Help from "@/components/Help";

const page = () => {
  const ourServicesRef = useRef<HTMLDivElement>(null);
  const [showProgressBar, setShowProgressBar] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercent);

      // 👇 Check if OurServices has entered viewport
      if (ourServicesRef.current) {
        const top = ourServicesRef.current.getBoundingClientRect().top;
        setShowProgressBar(top <= 0); // Show if top is above viewport
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      
      {showProgressBar && (
        <div className="fixed top-0 left-0 w-full h-[6px] z-50 bg-gray-200">
          <div
            className="h-full bg-yellow-500 transition-all duration-75 ease-out"
            style={{ width: `${scrollProgress}%` }}
          ></div>
        </div>
      )}
      <Carousal />
      <div ref={ourServicesRef}>
        <OurServices />
      </div>{" "}
      <FeaturedInsight />
      <Technology />
      <Careers />
      <Help />
      
    </>
  );
};

export default page;
