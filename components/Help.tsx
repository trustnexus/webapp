"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Help = () => {
  const router = useRouter();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            end: "top center",
            scrub: 2,
          },
        }
      );
    }

    if (paraRef.current) {
      gsap.fromTo(
        paraRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: paraRef.current,
            start: "top 80%",
            end: "top center",
            scrub: 2,
          },
        }
      );
    }

    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            end: "top center",
            scrub: 2,
          },
        }
      );
    }
  }, []);

  return (
    <div className="helpSection flex items-center justify-center h-auto min-h-[460px] px-6 py-16 md:py-[100px] bg-white">
      <div className="flex items-center flex-col gap-6 max-w-[800px] text-center">
        <div>
          <h1
            ref={headingRef}
            className="helpHeading text-2xl md:text-4xl font-semibold mb-2"
          >
            How can we help you?
          </h1>
          <p
            ref={paraRef}
            className="helpPara text-base md:text-lg text-gray-700"
          >
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </p>
        </div>
        <button
          ref={buttonRef}
          onClick={() => router.push("/contact-us")}
          className="helpBtn px-6 py-3 text-sm md:text-base bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-300"
        >
          LET'S WORK TOGETHER
        </button>
      </div>
    </div>
  );
};

export default Help;
