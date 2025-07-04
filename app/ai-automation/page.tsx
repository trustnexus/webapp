'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔹 HERO SECTION */}
      <section className="relative h-[500px] bg-[url('https://images.unsplash.com/photo-1618401471353-b98afee0b35c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Intelligent Process Automation
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Automate repetitive tasks, improve decision-making, and accelerate workflows through AI-driven process automation.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 2: TEXT + ILLUSTRATION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🤖 AUTOMATION AT SCALE</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Empower Your Operations with AI-Powered Automation
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Intelligent Process Automation solutions help you automate rule-based, repetitive tasks using AI, Machine Learning, and RPA. Whether it’s handling documents, managing customer interactions, or streamlining approvals — we make your operations smarter.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://assets-global.website-files.com/615c3ed3b7c82b6eb66ebc7f/62833d313be0fe137d6d7cd1_process%20automation%20AI.webp"
              alt="IPA Illustration"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: FEATURES GRID */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-10">
            What Can You Automate?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: '🧾 Invoice & Document Processing',
                desc: 'Automate data extraction, validation, and routing of financial and legal documents.',
              },
              {
                title: '📞 Customer Service Automation',
                desc: 'AI chatbots and smart assistants that resolve issues and escalate critical queries.',
              },
              {
                title: '📋 Task Workflow Management',
                desc: 'Use logic-based engines to route tasks between departments and ensure SLA compliance.',
              },
              {
                title: '📊 Report Generation',
                desc: 'Automate data gathering and periodic report creation from multiple sources.',
              },
              {
                title: '🧠 Decision Support',
                desc: 'Use ML-based insights to trigger smart decisions in workflows.',
              },
              {
                title: '📤 Email & Communication',
                desc: 'Send updates, reminders, or summaries triggered by workflow rules.',
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
            Ready to Automate Your Business Processes?
          </h2>
          <p className="text-lg mb-6">
            Talk to our experts and explore how AI-powered automation can streamline your operations, reduce costs, and boost productivity.
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
