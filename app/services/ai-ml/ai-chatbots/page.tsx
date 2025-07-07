"use client";
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const featuresRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateElement = (ref:any, x = 0, y = 50) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x:100, y },
        {
          opacity: 1,
          x: 0,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top bottom',
            end: 'top center',
            scrub: 2,
          },
        }
      );
    };

    animateElement(heroRef, 0, 0);
    animateElement(imageRef, -100, 50);
    animateElement(textRef, 100, 50);
    animateElement(featuresRef);
    animateElement(ctaRef, 0, 50);
  }, []);

  return (
    <>
      {/* 🔹 HERO SECTION WITH PARALLAX BACKGROUND */}
      <section
        ref={heroRef}
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://miro.medium.com/v2/resize:fit:2000/1*uUv_zis0Yl0FSZkoxPBhKA.jpeg')]"
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            AI Chatbots & NLP Solutions
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Transform customer interactions with intelligent, 24/7 virtual agents powered by AI and natural language understanding.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 2: TEXT + ILLUSTRATION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <div ref={imageRef} className="md:w-1/2 overflow-hidden">
            <img
              src="https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2024/02/What-is-AI-Chatbot.jpg"
              alt="AI Chatbot"
              className="shadow-md hover:scale-125 duration-300"
            />
          </div>
          <div ref={textRef} className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">💬 CONVERSATIONAL AI</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Elevate Engagement with Human-Like Conversations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our AI-powered chatbots help automate FAQs, onboard customers, schedule meetings, and even support transactions. With NLP and contextual awareness, these bots learn and evolve continuously for a personalized experience.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: FEATURES GRID */}
      <section ref={featuresRef} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What Our Chatbots Can Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: '🗣️ NLP-Powered Conversations',
                desc: 'Understand user intent and provide accurate, human-like responses with natural language processing.',
              },
              {
                title: '📅 Appointment Scheduling',
                desc: 'Allow users to easily book, reschedule, or cancel appointments directly via chatbot.',
              },
              {
                title: '🛒 E-commerce Support',
                desc: 'Guide customers through browsing, checkout, and order tracking instantly.',
              },
              {
                title: '📈 Lead Qualification',
                desc: 'Capture and score leads intelligently by asking the right questions at the right time.',
              },
              {
                title: '🌐 Multilingual Support',
                desc: 'Communicate effectively with users in multiple languages using advanced translation models.',
              },
              {
                title: '⚙️ Easy CRM Integration',
                desc: 'Seamlessly sync with your CRM tools to keep your sales and support teams in the loop.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 4: CTA */}
      <section ref={ctaRef} className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Build a Smarter Chatbot for Your Brand
          </h2>
          <p className="text-lg mb-6">
            Our team can design and deploy AI-driven chatbots tailored to your business use case. From eCommerce to enterprise.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Talk to an AI Specialist
          </a>
        </div>
      </section>

      <Help />
    </>
  );
};

export default Page;
