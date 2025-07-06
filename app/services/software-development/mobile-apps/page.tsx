'use client';
import Help from "@/components/Help";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Hero Text Animation
    gsap.from(".heroText", {
      y: -50,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });

    // Section 1
    gsap.from(".section1Text", {
      x: -50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".section1",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    gsap.from(".section1Image", {
      x: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".section1",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    // Section 2
    gsap.from(".section2Image", {
      x: -50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    gsap.from(".section2Text", {
      x: 50,
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: ".section2",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      {/* 🔹 HERO SECTION */}
      <div className="relative w-full h-[550px] overflow-hidden bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-floating-apps-for-mobile-phone-a-3d-concept-in-application-development-image_3664602.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="relative z-10 flex items-center justify-center h-full bg-black/40 text-white text-center px-4 heroText">
          <div className="heroText">
            <h1 className="text-3xl sm:text-5xl font-bold">
              Build Smart & Scalable Mobile Applications
            </h1>
            <p className="mt-4 text-base sm:text-lg max-w-[600px] mx-auto">
              Native, hybrid, or cross-platform — we craft mobile solutions that align with your business goals and user needs.
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 SECTION 1 */}
      <section className="py-20 px-4 relative bg-white section1">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center justify-between gap-20 relative">
          {/* Text Content */}
          <div className="md:w-1/2 z-10 section1Text">
            <p className="text-sm text-blue-600 mb-2">📱 MOBILE-FIRST STRATEGY</p>
            <p className="text-3xl sm:text-[50px] font-light mb-4">
              Your Business in Your Customer’s Pocket
            </p>
            <p className="text-gray-700 text-base max-w-xl sm:text-lg leading-relaxed">
              We design and develop mobile apps that deliver exceptional user experiences and performance.
              Whether it's Android, iOS, or cross-platform using Flutter or React Native, our team builds secure,
              scalable apps that users love.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2 relative lg:absolute top-10 lg:-bottom-20 lg:right-6 h-[400px] overflow-hidden z-0 w-full flex justify-center section1Image">
            <img
              src="https://www.shutterstock.com/shutterstock/photos/1932042689/display_1500/stock-photo-businessman-using-mobile-smart-phone-business-global-internet-connection-application-technology-1932042689.jpg"
              alt="Mobile App Development"
              className="hover:scale-125 h-[400px] sm:h-[500px] duration-300 shadow-md rounded-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 2 */}
      <section className="py-20 px-4 bg-gray-50 section2">
        <div className="max-w-[1320px] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          {/* Image */}
          <div className="md:w-1/2 overflow-hidden section2Image">
            <img
              src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104473.jpg?semt=ais_items_boosted&w=740"
              alt="Cross-platform compatibility"
              className="hover:scale-125 h-[500px] duration-300 shadow-md  object-cover"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2 section2Text">
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

export default Page;
