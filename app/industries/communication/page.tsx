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
  const router = useRouter();
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="h-[400px] relative text-white bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-abstract-futuristic-communication-low-poly-dark-blue-vector-background-design-picture-image_1249984.jpg')] bg-no-repeat bg-cover bg-center flex pl-4 md:pl-[80px] items-center">
        <div className="banner flex flex-col absolute top-27 md:top-41 space-y-4">
          <p className="text-sm md:text-lg">COMMUNICATION</p>
          <p className="banner-heading text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] xl:text-[102px] leading-tight lg:bg-[linear-gradient(to_bottom,white_50%,black_50%)] lg:bg-clip-text lg:text-transparent font-light">
            Unlocking <br /> growth beyond <br /> connectivity
          </p>

          {/* <p className="banner-heading text-[28px] sm:text-[40px] md:text-[60px] lg:text-[90px] xl:text-[102px] leading-tight bg-gradient-to-b from-white to-black bg-clip-text text-transparent font-light">
            Unlocking <br /> growth beyond <br /> connectivity
          </p> */}

          <button
            onClick={() => router.push("/contact-us")}
            className="banner-btn bg-black text-white py-3 px-8 rounded-md w-fit"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Unified Customer Section */}
      <section className="unified-section  py-16 md:mt-50 px-4">
        <div className="max-w-[1296px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-full lg:max-w-[552px] space-y-6">
            <p className="unified-text text-[26px] md:text-[40px] lg:text-[54px] font-semibold">
              Unified customer experiences in the telco realm
            </p>
            <p className="text-base md:text-lg">
              The modern telco industry has been at the forefront of disruptive
              change. For CSPs, we offer experience-led IT strategies and
              immersive models...
            </p>
          </div>
          <div className="unified-image  flex-1 max-w-[648px] w-full">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-03/unified-customer.webp"
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
            The time for tech-driven telco is now
          </h1>
          <p className="text-base text-gray-700">
            We offer future-proof solutions across the entire telco value chain.
          </p>
          <Link href="/" className="text-blue-600 underline">
            GET IN TOUCH
          </Link>
        </div>
        <div className="offerRight w-full lg:w-[50%] border-t lg:border-t-0 lg:border-l border-gray-300 space-y-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="px-4 lg:px-[54px]">
              <h4 className="font-bold text-lg mb-2">
                Customer relationship management
              </h4>
              <p className="text-sm text-gray-600">
                Holistic solutions with features spanning order management,
                sales & marketing...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[url('https://www.shutterstock.com/image-photo/tall-modern-office-buildings-center-600nw-2530816463.jpg')] bg-no-repeat bg-cover bg-center w-full h-auto py-16 brightness-75">
        <div className="max-w-[1296px] mx-auto px-4 text-white text-center space-y-12">
          <div>
            <h6 className="uppercase text-sm">Our Impact</h6>
            <p className="text-[26px] md:text-[48px] font-semibold leading-tight max-w-3xl mx-auto">
              Helping the telco industry redefine itself.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={10} enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Strategic partnerships with leading telco operators
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={93} suffix="%" enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Customer loyalty & retention increase
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                <CountUp end={30} suffix="+" enableScrollSpy />
              </h1>
              <p className="text-sm mt-2">
                Channels unified for a leading telco
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Swiper Partners Section */}
      <section className="py-12 px-4">
        <div className="max-w-[1296px] mx-auto text-center">
          <p className="text-[22px] md:text-[32px] font-semibold mb-8">
            Strong ecosystem of partners
          </p>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="w-full max-w-[1000px] mx-auto"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="flex justify-center items-center">
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  className="w-[195px] h-[95px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <Help />
    </div>
  );
};

export default page;
