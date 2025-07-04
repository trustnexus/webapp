"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CountUp from "react-countup";
useRouter;
const page = () => {
  const router = useRouter();

  useEffect(() => {
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
  }, []);
  return (
    <div className="">
      <div className="h-[400px] relative text-white bg-[url('https://png.pngtree.com/background/20210714/original/pngtree-abstract-futuristic-communication-low-poly-dark-blue-vector-background-design-picture-image_1249984.jpg')] bg-no-repeat flex pl-[80px] items-center my-auto bg-cover bg-center">
        <div className="flex flex-col absolute top-32 ">
          <p>COMMUNICATION</p>

          <p className="text-[102px] bg-gradient-to-b from-white via-white to-[#161616] bg-clip-text text-transparent font-light leading-35">
            Unlocking <br />
            growth beyond <br />
            connectivity
          </p>

          <button
            className="self-start bg-black text-white py-[16px] px-[50px] rounded-md"
            onClick={() => {}}
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
      <section className="mt-70 ">
        <div className="max-w-[1296px]  mx-auto flex items-center gap-10 justify-between">
          <div className="flex-1 max-w-[552px] flex flex-col gap-7 pr-[96px]">
            <p className="text-[29px] mb-[32px] md:text-[54px]  h-[211px]">
              Unified customer experiences in the telco realm
            </p>
            <p className="h-[189px] tex-[20px] mb-[16px]">
              The modern telco industry has been at the forefront of disruptive
              change. For CSPs, we offer experience-led IT strategies and
              immersive models to strengthen customer relationships and optimize
              operational efficiency. We envision first-rate customer service by
              tapping into our capabilities of advanced analytical solutions,
              API integration, BPM technology, and CRM experts.
            </p>
          </div>

          <div className="flex-1  max-w-[648px] h-[646px] ">
            <img
              src="https://www.systemsltd.com/sites/default/files/2023-03/unified-customer.webp"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="offerSection max-w-[1320px] flex  mx-auto h-[1697px] ">
        <div className="offerings max-w-[660px] h-[286px]  ">
          <p>OUR OFFERINGS</p>
          <h1>The time for tech-driven telco is now</h1>
          <p>
            We offer future-proof solutions across the entire telco value chain.
          </p>
          <Link href={"/"}>GET IN TOUCH</Link>
        </div>
        <div className="offerRight w-[660px] border-l border-gray-200">
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>{" "}
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>{" "}
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>{" "}
          <div className="p-[54px]">
            <h4>Customer relationship management</h4>
            <p>
              Holistic solutions with features spanning order management, sales
              & marketing, and customer service, focusing on business
              productivity, actionable insights, and customer experience.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[url('https://www.shutterstock.com/image-photo/tall-modern-office-buildings-center-600nw-2530816463.jpg')] bg-no-repeat bg-cover bg-center w-full h-[673px] brightness-75">
  <div className="max-w-[1296px] text-white flex flex-col items-center justify-between gap-30 mx-auto py-10 text-center">
    {/* Header */}
    <div className="flex flex-col items-center justify-center gap-6 mb-10">
      <h6 className="text-lg uppercase tracking-wide">Our Impact</h6>
      <p className="max-w-[972px] text-[29px] md:text-[58px] leading-tight font-semibold">
        Helping the telco industry redefine itself.
      </p>
    </div>

    {/* Stats Section */}
    <div className="w-full flex flex-col md:flex-row justify-center gap-10">
      <div className="w-[305px] mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-bold">
          <CountUp end={10} enableScrollSpy />
        </h1>
        <p>Strategic partnerships with leading telco operators</p>
      </div>

      <div className="w-[305px] mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-bold">
          <CountUp end={93} suffix="%" enableScrollSpy />
        </h1>
        <p>Increase in customer loyalty & retention for a leading telco</p>
      </div>

      <div className="w-[305px] mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-bold">
          <CountUp end={30} suffix="+" enableScrollSpy />
        </h1>
        <p>Channels unification enabled for a leading telco operator</p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default page;
