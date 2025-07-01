"use client";
import React, { useEffect, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const impactRef = useRef(null);
  const innovationRef = useRef(null);
  const possibilitiesRef = useRef(null);
  const headingRef = useRef(null); // already used for the section
const text = ['impact','innovative','possiblities']
  const services = [
    {
      heading: "AI Transformation",
      desc: "lorem sadh jkasd jaks dkjsa kjdsa dksa kd ksa d...",
      link: "LEARN MORE ",
    },
    {
      heading: "Data & Analytics",
      desc: "lorem sadh jkasd jaks dkjsa kjdsa dksa kd ksa d...",
      link: "LEARN MORE ",
    },
    {
      heading: "Digital",
      desc: "lorem sadh jkasd jaks dkjsa kjdsa dksa kd ksa d...",
      link: "LEARN MORE ",
    },
    {
      heading: "Cloud",
      desc: "lorem sadh jkasd jaks dkjsa kjdsa dksa kd ksa d...",
      link: "LEARN MORE ",
    },
  ];

  useEffect(() => {
    gsap.to(headingRef.current, {
      y: 290, // move 100px down
      x: -599,
      ease: "power2.out",
      duration: 10,
      fontSize: "45px",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 50px", // when heading hits center of screen
        // end: "bottom center", // adjust as needed
        markers: true,
        scrub: 1, // smooth scrolling
        toggleActions: "restart pause reverse none",
      },
    });
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: "top 70%",
  //       markers: false,
  //     },
  //   });

  //   // impact: show → hide
  //   tl.fromTo(
  //     impactRef.current,
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  //   ).to(impactRef.current, {
  //     opacity: 0,
  //     duration: 0.5,
  //     delay: 1, // keeps it visible for 1s
  //   });

  //   // innovation: show → hide
  //   tl.fromTo(
  //     innovationRef.current,
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  //   ).to(innovationRef.current, {
  //     opacity: 0,
  //     duration: 0.5,
  //     delay: 1,
  //   });

  //   // possibilities: show only (no hide if it's last)
  //   tl.fromTo(
  //     possibilitiesRef.current,
  //     { y: 100, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  //   );
  //   // tl.from(impactRef.current, {
  //   //   y: 100,
  //   //   opacity: 0,
  //   //   duration: 1,
  //   //   ease: "power3.out",
  //   // })
  //   //   .from(
  //   //     innovationRef.current,
  //   //     {
  //   //       y: 100,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //       ease: "power3.out",
  //   //     },
  //   //     "+=1.5"
  //   //   )
  //   //   .from(
  //   //     possibilitiesRef.current,
  //   //     {
  //   //       y: 100,
  //   //       opacity: 0,
  //   //       duration: 1,
  //   //       ease: "power3.out",
  //   //     },
  //   //     "+=1.5"
  //   //   );
  // }, []);

  return (
    <>
      {/* Heading with GSAP animation */}
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="">
          <p
            ref={headingRef}
            className="inline-block select-none font-semibold bg-clip-text text-transparent text-[102px] md:text-[110px] [background-image:linear-gradient(to_right,#000000,#d63384,#000000,#000000,#000000,#0dcaf0,#000000,#000000,#000000,#d63384,#000000)] [word-spacing:-7px] tracking-tight"
          >
            Our Services
          </p>
        </div>
      </div>

      {/* Section Below */}
      <div className="w-[1432px] text-start mx-auto flex gap-10">
        <div className="w-[80%] flex flex-col gap-10">
          <h1 className="redefining flex flex-col gap-8">
            <div className="flex gap-2">
              <span className="[background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000)] inline-block bg-clip-text text-transparent">
                Redefining
              </span>
              <span
                ref={impactRef}
                className="[background-image:linear-gradient(to_right,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384)] inline-block bg-clip-text text-transparent"
              >
                impact
              </span>
              <span
                ref={innovationRef}
                className="[background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent"
              >
                innovation
              </span>
              <span
                ref={possibilitiesRef}
                className="[background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#ffffff,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent"
              >
                possiblities
              </span>
            </div>
            <span className="[background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#d63384,#d63384,#ced4da,#d63384,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent">
              across the globe
            </span>
          </h1>
          <span className="text-orange-300 flex items-start justify-start gap-2">
            GET IN TOUCH <BiRightArrowAlt />
          </span>
        </div>

        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <div key={index}>
              <div className="">
                <h4>{service.heading}</h4>
                <p>{service.desc}</p>
                <Link
                  style={{ color: "orange", textDecoration: "none" }}
                  className="flex items-center gap-1"
                  href="/"
                >
                  {service.link} <BiRightArrowAlt size={20} />
                </Link>
              </div>
              <hr className="border-gray-500" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurServices;
