"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FeaturedInsight = () => {
  const features = [
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2024-10/AnyConv.com__Vertical-424x611-%281%29a.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2025-05/AI%20is%20taking%20over%20banking%20faster%20than%20you%20think%20%281%29.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2024-10/Systems%20Limited%20MEA%20achieves%20the%202024-2025%20Microsoft%20Business%20Applications%20Inner%20Circle%20award_0.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2025-03/Enhancing-enterprise-mobility-through-customer-inclusive-app.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2024-10/pasha.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
    {
      image:
        "https://www.systemsltd.com/sites/default/files/2024-04/https___www.systemsltd.com_newsroom_systems-limited-graced-3-accolades-it-ites-export-awards-2024-pseb-1.webp",
      heading: "NEWS ROOM",
      subHeading:
        "Systems Limited wins Forbes Asia's Best Under a Billion 2024",
      para: "Leading the way",
      link: "Read more →",
    },
  ];
  const gridRef = useRef(null);

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  useEffect(() => {
    const cards: any = gsap.utils.toArray(".featured-card");

    gsap.set(cards, { opacity: 0, y: 100 });

    ScrollTrigger.batch(cards, {
      start: "top 85%",
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="py-10 bg-slate-700 text-white">
      <h1 className="my-10 text-[20px] text-center font-light">
        Featured Insights
      </h1>
      <div className="">
        <div
          ref={gridRef}
          className="grid grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 w-[1320px] container mx-auto"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              className="featured-card w-[332px] h-[512px] relative overflow-hidden cursor-pointer group"
            >
              {/* Background Image */}
              <img
                src={feature.image}
                alt=""
                className={`w-full h-full object-cover transition-transform duration-300 ${
                  hoverIndex === index ? "scale-150" : ""
                }`}
              />

              {/* Overlay Blur on Hover */}
              {hoverIndex === index && (
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-all duration-300 z-10" />
              )}

              {/* Top Content */}
              <div className="absolute top-4 left-4 z-20">
                <p className="text-sm font-semibold">{feature.heading}</p>
                <p className="text-lg font-semibold max-w-[90%]">
                  {feature.subHeading}
                </p>
              </div>

              {/* Center Paragraph */}
              <div
                className={`absolute inset-0 flex items-center justify-center z-20 transition-transform duration-500 ${
                  hoverIndex === index
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
                }`}
              >
                <p className="text-sm text-center max-w-[80%]">
                  {feature.para}
                </p>
              </div>

              {/* Bottom Left Link */}
              {hoverIndex === index && (
                <div className="absolute bottom-4 right-4 z-20">
                  <span className="text-blue-300 text-sm underline">
                    {feature.link}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedInsight;
