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
    if (!technologyParaRef) return;

    gsap.fromTo(
      technologyParaRef.current,
      {
        y: 100,
        opacity: 0,
      },
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
      <div
        ref={technologyRef}
        className="w-[1320px] technology mx-auto flex justify-between"
      >
        <div className="flex flex-col gap-3 pl-[12px] border-r-[1px] border-gray-200 pt-[100px] pr-[100px] pb-[100px]">
          <p className="w-[548px] h-[106px] text-[46px] ">
            Translating Technology into a positive impact
          </p>
          <p
            className="w-[548px] h-[84px]
          "
          >
            {" "}
            Our approach allows us to deliver exceptional experiences that drive
            growth and success for all stakeholders. Let’s rise to new heights
            with the power of digital transformation.{" "}
          </p>

          <Link
            style={{ color: "orange", textDecoration: "none" }}
            className="flex items-center gap-1 hover:underline"
            href={"/"}
          >
            Learn more <BiRightArrowAlt size={18} />
          </Link>
        </div>
        <div className="py-[100px] mb-10 flex flex-col gap-10 px-[70px] ">
          <div className="flex w-full gap-10">
            <div className="">
              {/* <h1 className="text-7xl">48+</h1> */}
              <h1 className="text-7xl">
                <CountUp end={48} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p>Years of continual excellence</p>
            </div>
            <div className="">
              <h1>
                <CountUp end={7700} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p>change makers diving revolution</p>
            </div>
          </div>
          <div className="flex w-full gap-10">
            <div className="">
              <h1>
                <CountUp end={300} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p>Years of continual excellence</p>
            </div>
            <div className="">
              <h1>
                <CountUp end={16} duration={2} enableScrollSpy suffix="+" />
              </h1>
              <p>change makers diving revolution</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center w-[1296px] container flex-col gap-6 my-6 flex items-center justify-center mt-5 mx-auto">
        <p ref={technologyParaRef} className="text-[32px] w-[1002px] h-[80px]">
          We rethink business growth for you through our collective experience
          with strategic partner ecosystem.
        </p>
        <div className="scrollbar-hide  flex items-center cursor-grab gap-8 overflow-x-auto justify-evenly w-[1002px] ">
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/Informatica-%20Systems_0.webp?itok=RMYWbeb1"
            alt=""
          />
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/formpipe%20-%20Systems%20Limited.webp?itok=wXPHnfG9"
            alt=""
          />{" "}
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/Sprinklr-%20Systems%20limited_0.webp?itok=IiUlFDLb"
            alt=""
          />{" "}
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2024-09/mirco-soft%20%281%29.webp?itok=Hw1jSUzE"
            alt=""
          />{" "}
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2025-01/IBM%20-%20Systems%20Limited.webp?itok=dodHm7zO"
            alt=""
          />{" "}
          <img
            className="w-[195px] "
            src="https://www.systemsltd.com/sites/default/files/styles/webp/public/2024-09/temenos%20%281%29.webp?itok=jmMsmxAj"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Technology;
