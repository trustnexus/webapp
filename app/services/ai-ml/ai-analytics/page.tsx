"use client";
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const heroRef = useRef(null);
  const insightImgRef = useRef(null);
  const insightTextRef = useRef(null);
  const benefitsRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const animateXY = (ref:any, xVal = -100, yVal = 50) => {
      if (!ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, x: xVal, y: yVal },
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

    animateXY(heroRef, 0, 0);
    animateXY(insightImgRef, -100, 0);
    animateXY(insightTextRef, 100, 0);
    animateXY(benefitsRef, 0, 100);
    animateXY(ctaRef, 0, 100);
  }, []);

  return (
    <>
      {/* 🔷 HERO SECTION - PARALLAX EFFECT */}
      <section
        ref={heroRef}
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://www.techfunnel.com/wp-content/uploads/2024/10/Predictive-Analytics.png')]"
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Predictive Analytics & Insights
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Anticipate trends, detect risks early, and optimize decisions with data-driven intelligence powered by AI.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2 - INSIGHT EXPLANATION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2" ref={insightImgRef}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D12AQGHNL1mN1VzUA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693687490471?e=2147483647&v=beta&t=OsN42T7m9Tu3sBAzGWvv5UdtweOJtUslt0AbEahDGmY"
              alt="Data Chart"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          <div className="md:w-1/2" ref={insightTextRef}>
            <p className="text-sm text-blue-600 mb-2">📊 DATA-DRIVEN INTELLIGENCE</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Make Smarter Business Decisions
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Predictive analytics leverages historical data and machine learning models to forecast future outcomes.
              From customer behavior to inventory needs — gain real-time insights to act faster and stay ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3 - BENEFITS GRID */}
      <section ref={benefitsRef} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            How Predictive Analytics Helps Your Business
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: '🧠 Forecast Customer Behavior',
                desc: 'Understand what customers want next and build personalized journeys to retain them.',
              },
              {
                title: '📈 Improve Demand Planning',
                desc: 'Anticipate demand changes in supply chains, inventory, or seasonal cycles.',
              },
              {
                title: '🚩 Detect Anomalies & Risks',
                desc: 'Use predictive models to catch fraud, performance drops, or compliance breaches early.',
              },
              {
                title: '💼 Optimize Marketing ROI',
                desc: 'Segment audiences smartly and run campaigns based on predicted responses.',
              },
              {
                title: '📦 Smart Inventory Management',
                desc: 'Prevent overstocking or shortages by knowing exactly when to reorder.',
              },
              {
                title: '📉 Reduce Churn Rates',
                desc: 'Use churn prediction models to retain high-value customers through proactive engagement.',
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

      {/* 🔷 SECTION 4 - CTA */}
      <section ref={ctaRef} className="py-16 px-4 bg-blue-600 text-white text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Make Informed, Data-Backed Decisions?
          </h2>
          <p className="text-lg mb-6">
            Let us help you unlock powerful insights that drive strategy, efficiency, and revenue growth.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Strategy Call
          </a>
        </div>
      </section>

      <Help />
    </>
  );
};

export default Page;
