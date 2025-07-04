'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION - PARALLAX EFFECT */}
      <section
        className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://assets-global.website-files.com/6358db62ae69e2cbcbcad7c5/63766082ea79ed0ac5fbb540_hero.webp')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
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
          <div className="md:w-1/2">
            <img
              src="https://cdn.dribbble.com/users/292733/screenshots/6132013/media/0bcfae5b3a5c732d24987d15e6a9ea76.gif"
              alt="Data Chart"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          <div className="md:w-1/2">
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
      <section className="bg-gray-50 py-20 px-4">
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
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
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

export default page;
