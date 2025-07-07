"use client";
import React, { useEffect, useRef } from "react";
import Help from "@/components/Help";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef(null);
  const benefitRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateSection = (ref:any, x = 0, y = 50) => {
      if (!ref.current) return;
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

    animateSection(heroRef, -50, 50); // animate from left and bottom
    animateSection(benefitRef, 50, 50); // animate from right and bottom
    animateSection(ctaRef, 0, 80); // animate from bottom only
  }, []);

  return (
    <>
      {/* 🔹 HERO SECTION WITH ANIMATED BACKDROP */}
      <section
        ref={heroRef}
        className="relative min-h-[600px] bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('https://t3.ftcdn.net/jpg/04/37/39/18/360_F_437391889_ebGNTbME7F6KPEgIPwh738Rvfm8WF0tj.jpg')] bg-cover bg-center opacity-60"></div>
        <div className="absolute top-10 left-[27%] z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 animate-fadeInUp">
            Robotic Process Automation (RPA)
          </h1>
          <p className="text-lg sm:text-xl max-w-2xl animate-fadeInUp delay-200">
            Automate repetitive business processes and increase efficiency across departments with our scalable RPA solutions.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 2: BENEFITS GRID */}
      <section ref={benefitRef} className="bg-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-800">
            Why Choose RPA?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                title: "📈 Increased Productivity",
                desc: "Automate repetitive tasks so your team can focus on high-value work.",
              },
              {
                title: "💸 Cost Reduction",
                desc: "Lower operational costs by minimizing manual errors and delays.",
              },
              {
                title: "⏱️ 24/7 Operation",
                desc: "Bots never sleep. Ensure uninterrupted workflow round the clock.",
              },
              {
                title: "🛡️ Compliance & Accuracy",
                desc: "Maintain regulatory compliance with consistent and traceable outputs.",
              },
              {
                title: "🔁 Easy Scalability",
                desc: "Deploy bots across teams and functions as your business grows.",
              },
              {
                title: "📊 Analytics Integration",
                desc: "Track KPIs and bot performance in real-time dashboards.",
              },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition">
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: CTA WITH PARALLAX */}
      <section
        ref={ctaRef}
        className="bg-fixed bg-center bg-no-repeat bg-cover py-24 px-6 text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="bg-black/70 py-16 px-6 rounded-xl max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Ready to Deploy Digital Workforce?</h2>
          <p className="text-lg mb-6">
            Our experts will help you identify, design, and launch RPA bots tailored to your organization’s unique needs.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Talk to an RPA Specialist
          </a>
        </div>
      </section>

      {/* 🔹 HELP SECTION */}
      <Help />
    </>
  );
};

export default Page;
