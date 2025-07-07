"use client";
import Help from "@/components/Help";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateFromX = (ref: any, xVal = -100) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: xVal },
        {
          opacity: 1,
          x: 0,
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

    animateFromX(heroRef, 0);
    animateFromX(textRef, -100);
    animateFromX(imageRef, 100);
    animateFromX(featuresRef);
    animateFromX(ctaRef);
  }, []);

  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section
        ref={heroRef}
        className="relative h-[500px] bg-[url('https://www.shutterstock.com/image-photo/hands-robot-human-connect-artificial-600nw-2491063591.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Intelligent Process Automation
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Automate repetitive tasks, improve decision-making, and accelerate
            workflows through AI-driven process automation.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 2: TEXT + ILLUSTRATION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2" ref={textRef}>
            <p className="text-sm text-blue-600 mb-2">🤖 AUTOMATION AT SCALE</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Empower Your Operations with AI-Powered Automation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Intelligent Process Automation solutions help you automate
              rule-based, repetitive tasks using AI, Machine Learning, and RPA.
              Whether it’s handling documents, managing customer interactions,
              or streamlining approvals — we make your operations smarter.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2 overflow-hidden" ref={imageRef}>
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQHS2nH4BRrOjg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1732663184891?e=2147483647&v=beta&t=oBeeo-D9PsSxHOiFsKd_GlNyjpjg9MfZN98PNKH8sno"
              alt="IPA Illustration"
              className="shadow-md hover:scale-125 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: FEATURES GRID */}
      <section ref={featuresRef} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What Can You Automate?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "🧾 Invoice & Document Processing",
                desc: "Automate data extraction, validation, and routing of financial and legal documents.",
              },
              {
                title: "📞 Customer Service Automation",
                desc: "AI chatbots and smart assistants that resolve issues and escalate critical queries.",
              },
              {
                title: "📋 Task Workflow Management",
                desc: "Use logic-based engines to route tasks between departments and ensure SLA compliance.",
              },
              {
                title: "📊 Report Generation",
                desc: "Automate data gathering and periodic report creation from multiple sources.",
              },
              {
                title: "🧠 Decision Support",
                desc: "Use ML-based insights to trigger smart decisions in workflows.",
              },
              {
                title: "📤 Email & Communication",
                desc: "Send updates, reminders, or summaries triggered by workflow rules.",
              },
            ].map((item, i) => (
              <div
                key={i}
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

      {/* 🔹 SECTION 4: CTA */}
      <section
        ref={ctaRef}
        className="py-16 px-4 bg-blue-600 text-white text-center"
      >
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Automate Your Business Processes?
          </h2>
          <p className="text-lg mb-6">
            Talk to our experts and explore how AI-powered automation can
            streamline your operations, reduce costs, and boost productivity.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* 🔹 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
