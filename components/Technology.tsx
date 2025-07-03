


"use client";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";

gsap.registerPlugin(ScrollTrigger);

const Technology = () => {
  const technologyRef = useRef(null);
  const technologyParaRef = useRef(null);

  useEffect(() => {
    if (!technologyRef.current) return;

    gsap.fromTo(
      technologyRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologyRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    if (!technologyParaRef.current) return;

    gsap.fromTo(
      technologyParaRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: technologyParaRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <>
      {/* Section Container */}
      <div
        ref={technologyRef}
        className="max-w-screen-xl  mx-auto px-4 flex flex-col lg:flex-row justify-between items-start flex-wrap py-16"
      >
        {/* Left Content */}
        <div className="lg:w-1/2 border-b lg:border-b-0 lg:border-r border-gray-300 pr-0 lg:pr-12 pb-10 lg:pb-0">
          <p className="text-2xl sm:text-3xl lg:text-[46px] font-semibold leading-snug mb-4">
            Translating Technology into a positive impact
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.
          </p>
          <Link
            href="/"
            style={{textDecoration:'none'}}
            className="text-orange-500 font-medium flex items-center gap-1 "
          >
            Learn more <BiRightArrowAlt size={18} />
          </Link>
        </div>

        {/* Right Stats */}
        <div className="lg:w-1/2 pt-10  lg:pt-0 flex flex-col gap-10 px-0 lg:px-8">
          <div className="flex gap-10 flex-wrap">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                <CountUp end={48} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Years of continual excellence
              </p>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                <CountUp end={7700} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Change makers driving revolution
              </p>
            </div>
          </div>
          <div className="flex gap-10 flex-wrap">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                <CountUp end={300} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Successful Projects
              </p>
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black">
                <CountUp end={16} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p className="text-gray-700 text-sm sm:text-base">
                Global Offices
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Partner Logos Section */}
      <div className="max-w-screen-xl mx-auto px-4 text-center flex flex-col gap-6 my-10">
        <p
          ref={technologyParaRef}
          className="text-xl sm:text-2xl lg:text-[32px] text-black font-semibold"
        >
          We rethink business growth for you through our collective experience
          with strategic partner ecosystem.
        </p>

        <div className="scrollbar-hide flex items-center gap-6 overflow-x-auto w-full py-4">
          {[
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/Informatica-%20Systems_0.webp?itok=RMYWbeb1",
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/formpipe%20-%20Systems%20Limited.webp?itok=wXPHnfG9",
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/Sprinklr-%20Systems%20limited_0.webp?itok=IiUlFDLb",
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2024-09/mirco-soft%20%281%29.webp?itok=Hw1jSUzE",
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/IBM%20-%20Systems%20Limited.webp?itok=dodHm7zO",
            "https://www.systemsltd.com/sites/default/files/styles/webp/public/2024-09/temenos%20%281%29.webp?itok=jmMsmxAj",
          ].map((src, i) => (
            <img
              key={i}
              className="w-[160px] sm:w-[180px] md:w-[195px] h-auto object-contain"
              src={src}
              alt={`partner-${i}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Technology;
