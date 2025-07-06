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
  const redefiningLineRef = useRef(null);
  const globeLineRef = useRef(null);
  const servicesRef = useRef(null);

  const headingRef = useRef(null); // already used for the section
  // const text = ["impact", "innovative", "possiblities"];
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

  // useEffect(() => {
  //   gsap.to(headingRef.current, {
  //     y: 390, // move 100px down
  //     x: -550,
  //     ease: "power2.out",
  //     duration: 10,
  //     fontSize: "49px",
  //     scrollTrigger: {
  //       trigger: headingRef.current,
  //       start: "top 50px", // when heading hits center of screen
  //       end: "bottom center", // adjust as needed
  //       // markers: true,
  //       // pin: headingRef.current,
  //       scrub: 1, // smooth scrolling
  //       toggleActions: "restart pause reverse none",
  //     },
  //   });
  // }, []);
// useEffect(() => {
//   const screenWidth = window.innerWidth;

//   // Mobile (<640px)
//   if (screenWidth < 640) {
//     gsap.to(headingRef.current, {
//       y: 350,
//       // x:,
//       fontSize: "25px",
//       ease: "power2.out",
//       duration: 10,
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top 50px",
//         end: "bottom center",
//         scrub: 2,
//         // pin: true, // ✅ pin on small screen
//         // toggleActions: "restart pause reverse none",
//       },
//     });
//   } else if (screenWidth < 1429 || screenWidth > 1033){
//      gsap.to(headingRef.current, {
//       y: 350,
//       x: -400,
//       fontSize: "39px",
//       ease: "power2.out",
//       duration: 10,
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top 50px",
//         end: "bottom center",
//         scrub: 1,
//         toggleActions: "restart pause reverse none",
//       },
//     });
//   } else if (screenWidth < 1033 || screenWidth > 640){
//      gsap.to(headingRef.current, {
//       y: 350,
//       x: -200,
//       fontSize: "30px",
//       ease: "power2.out",
//       duration: 10,
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top 50px",
//         end: "bottom center",
//         scrub: 1,
//         toggleActions: "restart pause reverse none",
//       },
//     });
//   } 
  
//   else {
//     // Desktop or sm+ screens
//     gsap.to(headingRef.current, {
//       y: 350,
//       x: -568,
//       fontSize: "49px",
//       ease: "power2.out",
//       duration: 10,
//       scrollTrigger: {
//         trigger: headingRef.current,
//         start: "top 50px",
//         end: "bottom center",
//         scrub: 1,
//         toggleActions: "restart pause reverse none",
//       },
//     });
//   }
// }, []);


useEffect(() => {
  const screenWidth = window.innerWidth;

  if (screenWidth < 640) {
    // Mobile (xs)
    gsap.to(headingRef.current, {
      y: 350,
      fontSize: "25px",
      ease: "power2.out",
      duration: 10,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 50px",
        end: "bottom center",
        scrub: 2,
        pin: true, // Pin for mobile
      },
    });
  } else if (screenWidth >= 640 && screenWidth < 1033) {
    // Small to medium screens
    gsap.to(headingRef.current, {
      y: 350,
      x: -200,
      fontSize: "30px",
      ease: "power2.out",
      duration: 10,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 50px",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart pause reverse none",
      },
    });
  } else if (screenWidth >= 1033 && screenWidth < 1429) {
    // Medium to large screens
    gsap.to(headingRef.current, {
      y: 350,
      x: -400,
      fontSize: "39px",
      ease: "power2.out",
      duration: 10,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 50px",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart pause reverse none",
      },
    });
  } else {
    // Extra large (desktop and above)
    gsap.to(headingRef.current, {
      y: 350,
      x: -568,
      fontSize: "49px",
      ease: "power2.out",
      duration: 10,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 50px",
        end: "bottom center",
        scrub: 1,
        toggleActions: "restart pause reverse none",
      },
    });
  }
}, []);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: redefiningLineRef.current, // 👈 actual element as trigger
        start: "bottom 80%", // 👈 when it enters 80% from top of viewport
        end: "bottom 60%", // optional, for scroll control
        scrub: true,
        toggleActions: "play pause reverse pause",
      },
    });

    tl.fromTo(
      redefiningLineRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 10, ease: "power3.out" }
    ).fromTo(
      globeLineRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 10, ease: "power3.out" },
      "+=0.3"
    );
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    tl.fromTo(
      impactRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      .to(impactRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      })
      .fromTo(
        innovationRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .to(innovationRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      })
      .fromTo(
        possibilitiesRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .to(possibilitiesRef.current, {
        opacity: 0,
        duration: 0.5,
        delay: 1,
      });
  }, []);
  useEffect(() => {
    const elements: any = gsap.utils.toArray(".service-card");

    gsap.set(elements, { opacity: 0, y: 100 }); // Initial state

    ScrollTrigger.batch(elements, {
      start: "top 80%",
      onEnter: (batch) => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          opacity: 0,
          y: 100,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.inOut",
        });
      },
    });
  }, []);

  return (
    <>
      {/* Heading with GSAP animation */}
      <div className="flex flex-col  items-center justify-center h-screen">
        <div className="headingDiv">
          <p
            ref={headingRef}
            className="inline-block text-[40px] select-none font-semibold bg-clip-text text-transparent  md:text-[110px] [background-image:linear-gradient(to_right,#000000,#d63384,#000000,#000000,#000000,#0dcaf0,#000000,#000000,#000000,#d63384,#000000)] [word-spacing:-7px] tracking-normal"
          >
            Our Services
          </p>
        </div>
      </div>

      {/* Section Below */}
      <div className="max-w-[1432px]   text-start mx-auto flex-wrap flex gap-10">
        <div className="md:w-[40%] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <div className="my-10 p-1 sm:p-5">
              <div
                ref={redefiningLineRef}
                className="redefining my-10 relative"
              >
                <span
                  className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px]
 font-semibold [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000)] inline-block py-1 bg-clip-text text-transparent"
                >
                  Redefining
                </span>
                <span
                  ref={impactRef}
                  className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px]
 absolute font-semibold top-0 sm:left-66 left-42 [background-image:linear-gradient(to_right,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384)] py-1 inline-block bg-clip-text text-transparent"
                >
                  impact
                </span>
                <span
                  ref={innovationRef}
                  className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px]
 py-1 font-semibold  absolute top-0 sm:left-66 left-42 [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent"
                >
                  innovation
                </span>
                <span
                  ref={possibilitiesRef}
                  className="text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px] py-1 font-semibold absolute top-0 sm:left-66 left-40  [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#ffffff,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent"
                >
                  possiblities
                </span>
              </div>
              <span
                ref={globeLineRef}
                className=" text-[25px] sm:text-[32px] md:text-[38px] lg:text-[44px] xl:text-[49px]
 py-1 -my-10  font-semibold [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#d63384,#d63384,#ced4da,#d63384,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#d63384,#d63384,#d63384,#d63384,#d63384,#000000,#000000)] inline-block bg-clip-text text-transparent"
              >
                across the globe
              </span>
            </div>
          </div>
          <span className="text-orange-500 px-10 -my-10 flex items-center hover:underline cursor-pointer gap-2">
            GET IN TOUCH <BiRightArrowAlt />
          </span>
        </div>

        <div
          ref={servicesRef}
          className="flex w-[661px] mx-[54px] my-10 md:my-0  flex-col gap-6"
        >
          {services.map((service, index) => (
            <div className=" md:max-w-[661px] service-card" key={index}>
              <div className=" p-[5px] md:p-[54px]">
                <h4>{service.heading}</h4>
                <p>{service.desc}</p>
                <Link
                  style={{ color: "orange", textDecoration: "none" }}
                  className="flex hover:underline cursor-pointer items-center gap-1"
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
