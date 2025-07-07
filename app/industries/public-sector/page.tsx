"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
useRouter;

import "swiper/css";
import Help from "@/components/Help";
import { HiOutlinePuzzlePiece } from "react-icons/hi2";

const page = () => {
  const images = [
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-31_4.png.webp?itok=SEHHx4ZG",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-02_1.png.webp?itok=gnhkTZrI",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/MicrosoftTeams-image%20%2835%29_0.png.webp?itok=r4MWgdG8",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/MicrosoftTeams-image%20%2834%29_0.png.webp?itok=ZI6kA5Bc",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-05_10.png.webp?itok=3-phplja",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-01_7.png.webp?itok=v0bfAj2o",
  ];
  const differntiaingFactors = [{
    icon:'https://www.systemsltd.com/themes/custom/sysltd/assets/images/industries/factor1.svg',
    name:'Executive commitment'
  },
{
    icon:'https://www.systemsltd.com/themes/custom/sysltd/assets/images/industries/factor2.svg',
    name:'Flexible engagement'
  },{
    icon:'https://www.systemsltd.com/themes/custom/sysltd/assets/images/industries/factor2.svg',
    name:'Strong priniciple and channel alignment'
  },{
    icon:'https://www.systemsltd.com/themes/custom/sysltd/assets/images/industries/factor4.svg',
    name:'Collaborative implementation methodology'
  },{
    icon:'https://www.systemsltd.com/themes/custom/sysltd/assets/images/industries/factor5.svg',
    name:'End-to-end digital transformation enablers'
  },
]
  useEffect(() => {
    // Run GSAP only for screens wider than 768px
    if (window.innerWidth >= 768) {
      gsap.registerPlugin(ScrollTrigger);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".offerSection",
          start: "top 30%",
          end: "bottom bottom",
          pin: ".offerings",
          scrub: 2,
        },
      });
      tl.from(".offerRight > div", {
        stagger: 0.33,
        opacity: 0,
        y: 30,
      });
    }

    // Unified Section Animation (triggered on scroll)
    gsap.from(".unified-text", {
      scrollTrigger: {
        trigger: ".unified-section",
        start: "top 80%",
        scrub: 2,
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    gsap.from(".unified-image", {
      scrollTrigger: {
        trigger: ".unified-section",
        start: "top 80%",
        scrub: 2,
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
const router = useRouter()
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-[400px] relative text-white bg-[url('https://thumbs.dreamstime.com/b/public-sector-government-people-business-concept-conceptualisation-governmental-system-citizen-service-338388335.jpg')] bg-no-repeat bg-cover bg-center flex pl-4 md:pl-[80px] items-center">
        <div className="banner flex flex-col absolute top-24 md:top-32 space-y-4">
          <p className="text-sm md:text-lg">Public sector</p>
          <p className="banner-heading text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] xl:text-[102px] leading-tight bg-gradient-to-b from-white via-white to-[#161616] bg-clip-text text-transparent font-light">
            Envisioning <br />
            future-ready <br />
            digital government{" "}
          </p>

          <button onClick={()=>router.push('/contact-us')} className="banner-btn bg-black text-white py-3 px-8 rounded-md w-fit">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Unified Customer Section */}
      <section className="unified-section  py-16 md:mt-50 px-4">
        <div className="max-w-[1296px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-full lg:max-w-[552px] space-y-6">
            <p className="unified-text text-[26px] md:text-[40px] lg:text-[54px] font-semibold">
              Laying the foundation for a future-ready public sector{" "}
            </p>
            <p className="text-base md:text-lg">
              The public sector is facing immense pressure to overhaul systems
              and accelerate its digital initiatives. From automation of manual
              tasks to end-to-end 360-degree digitization, we implement next-gen
              technology, helping public sectors across the globe build digital
              core capabilities, leverage agile and robust methodology, and
              enhance staff productivity.
            </p>
          </div>
          <div className="unified-image  flex-1 max-w-[648px] w-full">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-07/shutterstock_753708262%201_14%20%281%29.webp"
              alt="Unified customer"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section className="offerSection max-w-[1320px] mx-auto flex flex-col lg:flex-row gap-8 py-20 px-4">
        <div className="offerings w-full lg:w-[50%] space-y-5">
          <p className="text-lg font-medium text-gray-500">OUR OFFERINGS</p>
          <h1 className="text-[26px] md:text-[40px] font-bold">
            From resilience to readiness{" "}
          </h1>
          <p className="text-base text-gray-700">
            We help you go from vision to reality with speed and impact, respond
            to customers, and stand out from your competition with confidence
            and purpose.{" "}
          </p>
          <Link href="/" className="text-blue-600 underline">
            GET IN TOUCH
          </Link>
        </div>
        <div className="offerRight w-full lg:w-[50%] border-t lg:border-t-0 lg:border-l border-gray-300 space-y-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="px-4 lg:px-[54px]">
              <h4 className="font-bold text-lg mb-2">
                Cloud and digital platforms as enablers
              </h4>
              <p className="text-sm text-gray-600">
                We help you plan for a quick and smooth expansion of our
                services using cloud technology and digital platforms while
                ensuring that they prioritize the trust and security of citizens
                and employees.
              </p>
            </div>
          ))}
        </div>
      </section>
   <section className="w-full my-20 px-4">
  <div className="max-w-[1320px] mx-auto flex flex-col gap-10 items-center">
    {/* Heading */}
    <p className="text-[22px] md:text-[33px] font-semibold text-center">
      Our differentiating factors
    </p>

    {/* Cards Wrapper */}
    <div className="w-full flex flex-wrap justify-center gap-6">
      {differntiaingFactors.map((df, index) => (
        <div
          key={index}
          className="w-full sm:w-[45%] md:w-[30%] lg:w-[260px] flex flex-col items-center justify-center text-center gap-4 px-4 py-6 shadow-md rounded-lg bg-white hover:shadow-lg transition"
        >
          <img src={df.icon} alt={df.name} className="w-[60px] h-[60px] object-contain" />
          <p className="text-[17px] md:text-[20px] font-medium">{df.name}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Impact Section */}
      <section className="bg-[url('https://www.shutterstock.com/image-photo/tall-modern-office-buildings-center-600nw-2530816463.jpg')] bg-no-repeat bg-cover bg-center w-full h-[700px] py-16 brightness-75">
        <div className="max-w-[1296px] flex items-center justify-center md:justify-between gap-10 md:gap-50 flex-col mx-auto px-4 text-white text-center ">
          <div>
            <p className="text-[26px] md:text-[48px] font-semibold leading-tight max-w-3xl mx-auto">
              Enabling technology as a great equalizer in the public sector{" "}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={15} suffix="%" enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Workforce reduction through automation for a UAE-based telco
                operator{" "}
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={40} suffix="%" enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Productivity increase through digital transformation in a
                leading law enforcement agency{" "}
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={30} suffix="+" enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Reduction in lead time through seamless customer experience for
                a leading public institution{" "}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Help />
    </div>
  );
};

export default page;
