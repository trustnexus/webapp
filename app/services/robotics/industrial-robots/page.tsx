"use client";
import React, { useEffect, useRef } from "react";
import Help from "@/components/Help";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
 const heroRef = useRef<HTMLDivElement | null>(null);
const textImageRef1 = useRef<HTMLDivElement | null>(null);
const textImageRef2 = useRef<HTMLDivElement | null>(null);
const benefitsRef = useRef<HTMLDivElement | null>(null);
const industriesRef = useRef<HTMLDivElement | null>(null);
const ctaRef = useRef<HTMLDivElement | null>(null);
const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const animateFrom = (ref: any, x = 0, y = 50) => {
      if (!ref?.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "top center",
            scrub: 2,
          },
        }
      );
    };

    animateFrom(heroRef, 0, 50);
    animateFrom(textImageRef1, -80, 40);
    animateFrom(benefitsRef, 80, 40);
    animateFrom(textImageRef2, -60, 40);
    animateFrom(ctaRef, 0, 80);

    featureCardsRef.current.forEach((card, idx) => {
      if (!card) return;
      const x = idx % 2 === 0 ? -40 : 40;
      const y = idx % 3 === 0 ? 60 : 30;
      gsap.fromTo(
        card,
        { opacity: 0, x, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "top center",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Industrial Robots Integration
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Revolutionize your manufacturing with smart robotics systems
            tailored to streamline complex industrial operations.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2: TEXT + IMAGE */}
      <section className="py-20 px-4 bg-white">
        <div
          ref={textImageRef1}
          className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">
              ⚙️ SMART FACTORY AUTOMATION
            </p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Seamlessly Connect Robotic Systems with Your Industrial Workflow
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From robotic arms and conveyor systems to vision-based inspection
              and autonomous movement — we help industries implement intelligent
              robotics that increase efficiency, reduce labor costs, and ensure
              24/7 precision.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcEqWWjgej_Htl7eEE7TKQmaoKRtD1RDp_fw&s"
              alt="Industrial Robots"
              className="rounded-xl shadow-md  w-full h-full hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3: FEATURES */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Key Integration Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: "🤖 Robotic Arm Programming",
                desc: "Custom routines for pick & place, welding, cutting, and material handling.",
              },
              {
                title: "🔗 PLC & SCADA Integration",
                desc: "Ensure seamless communication with existing industrial control systems.",
              },
              {
                title: "🎯 Vision-Based QA Automation",
                desc: "Integrate cameras and AI for defect detection and real-time quality checks.",
              },
              {
                title: "🚀 Real-Time Motion Control",
                desc: "Sync robotic movement with assembly lines and conveyor speeds.",
              },
              {
                title: "🧠 AI-Enhanced Task Routing",
                desc: "Use machine learning to dynamically adapt task execution based on sensor input.",
              },
              {
                title: "🌐 Cloud & Edge Sync",
                desc: "Connect factory robots to cloud dashboards or edge servers for insights and control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                ref={(el) =>{
                   (featureCardsRef.current[i] = el)
                }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 4: BENEFITS */}
      <section className="py-20 px-4 bg-white">
        <div
          ref={benefitsRef}
          className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10"
        >
          <div className="md:w-1/2">
            <img
              src="https://www.arcossrl.com/wp-content/uploads/2020/08/W299-20-scaled.jpg"
              alt="Robotics Benefits"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">📈 IMPACTFUL GAINS</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Benefits of Industrial Robotics Integration
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Reduced human error and workplace injury</li>
              <li>Consistent 24/7 operation with high precision</li>
              <li>Cost-effective production in the long run</li>
              <li>Real-time monitoring and predictive maintenance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 5: INDUSTRIES WE SERVE */}
      <section className="py-20 px-4 bg-gray-50">
        <div
          ref={textImageRef2}
          className="max-w-[1320px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10"
        >
          <div className="md:w-1/2">
            <img
              src="https://d23xypyp2dkdqm.cloudfront.net/wp-content/uploads/2023/06/08231314/robot-assembly-line-with-electric-car-battery-cells-module-platform-3-1.jpg"
              alt="Industries Served"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🏭 INDUSTRY COVERAGE</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Industries We Serve
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Automotive & Assembly Lines</li>
              <li>Electronics & Semiconductor</li>
              <li>Pharmaceutical Manufacturing</li>
              <li>Food Processing & Packaging</li>
              <li>Heavy Machinery and Steelworks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔷 CTA PARALLAX SECTION */}
      <section
        ref={ctaRef}
        className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://fatfinger.io/wp-content/uploads/2024/10/team-of-engineers-lifting-heavy-machinery-using-a-2024-01-04-22-07-44-utc-min-edited-1200x1200.jpg')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Build the Factory of the Future
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Partner with us to integrate robotics into your workflow and
            experience smarter, faster, and safer operations.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Get a Free Industrial Consultation
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
