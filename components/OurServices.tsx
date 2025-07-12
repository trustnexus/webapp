"use client";
import React, { useEffect, useRef } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const OurServices = () => {
  const impactRef = useRef(null);
  const innovationRef = useRef(null);
  const possibilitiesRef = useRef(null);
  const redefiningLineRef = useRef(null);
  const globeLineRef = useRef(null);
  const servicesRef = useRef(null);

  const headingRef = useRef(null); // already used for the section
  const router = useRouter()
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
  ScrollTrigger.matchMedia({
    // Mobile < 640px
    "(max-width: 639px)": () => {
      gsap.to(headingRef.current, {
        x: 30,
        y: 380,
        fontSize: "28px",
        ease: "power2.out",
        duration: 10,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50px",
          end: "bottom center",
          scrub: 2,
          pin: true,
          toggleActions: "restart pause reverse none",
        },
      });
    },

    // Tablets 640px - 1023px
    "(min-width: 640px) and (max-width: 1023px)": () => {
      gsap.to(headingRef.current, {
        x: 0,
        y: 360,
        fontSize: "36px",
        ease: "power2.out",
        duration: 10,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50px",
          end: "bottom center",
          scrub: 1,
          pin: false,
          toggleActions: "restart pause reverse none",
        },
      });
    },

    // Laptops 1024px - 1439px
    "(min-width: 1024px) and (max-width: 1139px)": () => {
      gsap.to(headingRef.current, {
        x: -22,
        y: 358,
        fontSize: "45px",
        ease: "power2.out",
        duration: 10,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50px",
          end: "bottom center",
          scrub: 1,
          pin: false,
          toggleActions: "restart pause reverse none",
        },
      });
    },
 // Laptops 1024px - 1439px
    "(min-width: 1140px) and (max-width: 1439px)": () => {
      gsap.to(headingRef.current, {
        x: -356,
        y: 358,
        fontSize: "45px",
        ease: "power2.out",
        duration: 10,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50px",
          end: "bottom center",
          scrub: 1,
          pin: false,
          toggleActions: "restart pause reverse none",
        },
      });
    },

    // Desktop 1440px+
    "(min-width: 1440px)": () => {
      gsap.to(headingRef.current, {
        x: -400,
        y: 358,
        fontSize: "49px",
        ease: "power2.out",
        duration: 10,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 50px",
          end: "bottom center",
          scrub: 1,
          pin: false,
          toggleActions: "restart pause reverse none",
        },
      });
    },
  });
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
            className="inline-block text-[40px] select-none font-semibold bg-clip-text text-transparent  md:text-[110px] [background-image:linear-gradient(to_right,#000000,#0dcaf0,#000000,#000000,#000000,#0dcaf0,#000000,#000000,#000000,#0dcaf0,#000000)]  tracking-normal"
          >
            Our Services
          </p>
        </div>
      </div>

      {/* Section Below */}
      <div className="max-w-[1432px]   text-start mx-auto flex-wrap flex flex-col lg:flex-row justify-center gap-10">
        <div className="md:w-[40%]  w-full flex flex-col gap-10">
          <div className="flex flex-col gap-8">
            <div className="my-10 p-1 sm:p-5">
              <div
                ref={redefiningLineRef}
                className="pl-10 pr-2 md:pl-10 redefining mt-10 md:mb-7  lg:pb-10 lg:mt-9   mb-4 relative"
              >
                <span
                  className="text-[25px] sm:text-[32px] md:text-[30px] lg:text-[44px] xl:text-[49px]
 font-semibold [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000)] inline-block py-1 bg-clip-text text-transparent"
                >
                  Redefining
                </span>
                <span
                  ref={impactRef}
                  className="text-[25px] sm:text-[32px] md:text-[30px] lg:text-[44px] xl:text-[49px]
 absolute font-semibold top-0 xl:left-75 left-45 md:left-53 sm:left-55 lg:left-70 bg-[linear-gradient(to_right,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0)] py-1 inline-block bg-clip-text text-transparent"
                >
                  impact
                </span>
                <span
                  ref={innovationRef}
                  className="text-[25px] sm:text-[32px] md:text-[30px] lg:text-[44px] xl:text-[49px]
 py-1 font-semibold  absolute top-0 xl:left-75 left-45 md:left-53 sm:left-55 lg:left-70 bg-[linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#f8f9fa,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#d63384,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000)] inline-block bg-clip-text text-transparent"
                >
                  innovation
                </span>
                <span
                  ref={possibilitiesRef}
                  className="text-[25px] sm:text-[32px] md:text-[30px] lg:text-[44px] xl:text-[49px] py-1 font-semibold absolute top-0 xl:left-75 left-45 md:left-53 sm:left-55 lg:left-70 bg-[linear-gradient(to_right,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#ffffff,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000)] inline-block bg-clip-text text-transparent"
                >
                  possiblities
                </span>
              </div>
              <span
                ref={globeLineRef}
                className=" text-[25px] sm:text-[32px] md:pl-10 md:text-[30px] lg:text-[44px] xl:text-[49px]
 py-1 -my-16  font-semibold pl-10 pr-2 [background-image:linear-gradient(to_right,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#ced4da,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#000000,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#0dcaf0,#000000,#000000)] inline-block bg-clip-text text-transparent"
              >
                across the globe
              </span>
            </div>
          </div>
          <span onClick={()=>router.push('/contact-us')} className="text-orange-500 px-10 -my-10 flex items-center hover:underline cursor-pointer gap-2">
            GET IN TOUCH <BiRightArrowAlt />
          </span>
        </div>

        <div
          ref={servicesRef}
          className="flex max-w-[661px] lg:mt-10 mx-[54px] my-10 md:my-0  flex-col gap-6"
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
