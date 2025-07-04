'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔹 HERO SECTION WITH PARALLAX BACKGROUND */}
      <section className="relative h-[500px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1607968565043-49f1f53dfed3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
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
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">💬 CONVERSATIONAL AI</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Elevate Engagement with Human-Like Conversations
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our AI-powered chatbots help automate FAQs, onboard customers, schedule meetings, and even support transactions. With NLP and contextual awareness, these bots learn and evolve continuously for a personalized experience.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://assets-global.website-files.com/615c3ed3b7c82b6eb66ebc7f/632c1f04b4e3b8fb6dcd3b60_ai-chatbot-graphic.webp"
              alt="AI Chatbot"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: FEATURES GRID */}
      <section className="bg-gray-50 py-20 px-4">
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
      <section className="py-16 px-4 bg-blue-600 text-white text-center">
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

export default page;
