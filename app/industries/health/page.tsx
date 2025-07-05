"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
useRouter;
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Help from "@/components/Help";

const page = () => {
  const images = [
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-31_4.png.webp?itok=SEHHx4ZG",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-02_1.png.webp?itok=gnhkTZrI",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/MicrosoftTeams-image%20%2835%29_0.png.webp?itok=r4MWgdG8",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/MicrosoftTeams-image%20%2834%29_0.png.webp?itok=ZI6kA5Bc",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-05_10.png.webp?itok=3-phplja",
    "https://www.systemsltd.com/sites/default/files/styles/webp/public/2023-06/300X150-01_7.png.webp?itok=v0bfAj2o",
  ];

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
        scrub:2
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
        scrub:2
      },
      x:100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  }, []);
const router  = useRouter()
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-[400px] relative text-white bg-[url('https://img.freepik.com/premium-vector/health-medical-insurance-digital-technology-protection-blue-dark-background_252172-217.jpg')] bg-no-repeat bg-cover bg-center flex pl-4 md:pl-[80px] items-center">
        <div className="banner flex flex-col absolute top-24 md:top-32 space-y-4">
          <p className="text-sm md:text-lg">Health</p>
          <p className="banner-heading text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] xl:text-[102px] leading-tight bg-gradient-to-b from-white via-white to-[#161616] bg-clip-text text-transparent font-light">
Enhancing experience, <br />
access, and outcomes <br />
through technology          </p>

          <button  onClick={()=>router.push('contact-us')}className="banner-btn bg-black text-white py-3 px-8 rounded-md w-fit">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Unified Customer Section */}
      <section className="unified-section  py-16 md:mt-50 px-4">
        <div className="max-w-[1296px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-full lg:max-w-[552px] space-y-6">
            <p className="unified-text text-[26px] md:text-[40px] lg:text-[54px] font-semibold">
Humanizing technology and innovating for future            </p>
            <p className="text-base md:text-lg">
           The healthcare and pharmaceutical industry faces challenges in product research, supply chain management, manufacturing, and distribution. Maintaining quality standards requires proper documentation of each process, and professional capabilities and operational optimization are key to addressing these challenges.
            </p>
          </div>
          <div className="unified-image  flex-1 max-w-[648px] w-full">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-03/shutterstock_753708262%201_13.webp"
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
New waves of innovation           </h1>
          <p className="text-base text-gray-700">
We offer enterprise-level solutions and the best industry practices that contribute towards seamless efficient business operations.          </p>
          <Link href="/" className="text-blue-600 underline">
            GET IN TOUCH
          </Link>
        </div>
        <div className="offerRight w-full lg:w-[50%] border-t lg:border-t-0 lg:border-l border-gray-300 space-y-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="px-4 lg:px-[54px]">
              <h4 className="font-bold text-lg mb-2">
Innovating digitally
              </h4>
              <p className="text-sm text-gray-600">
             Utilizing digital technologies such as digital, data, and cloud to improve the productivity of your people and business operations by facilitating seamless connectivity and providing personalized and cost-effective experiences to customers.
              </p>
            </div>
          ))}
        </div>
      </section>


            <Help/>

    </div>
  );
};

export default page;
