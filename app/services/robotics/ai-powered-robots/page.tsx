'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION WITH PARALLAX */}
      <section className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1629904853752-2c104381733b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            AI-Powered Autonomous Robots
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Empower your enterprise with intelligent, self-operating robotic systems designed to think, adapt, and act.
          </p>
        </div>
      </section>

      {/* 🔷 OVERVIEW SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🤖 NEXT-GEN ROBOTICS</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Autonomy Driven by Artificial Intelligence
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our autonomous robots use deep learning, computer vision, and real-time sensors to
              navigate, adapt, and make intelligent decisions — ideal for industries like logistics,
              defense, healthcare, and agriculture.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1598046593093-5d89f81eb7e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="AI Robot"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES GRID */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Capabilities That Set Us Apart
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: '🧠 Real-Time Object Recognition',
                desc: 'Detect and classify surroundings using AI-powered vision systems.',
              },
              {
                title: '🛰️ Autonomous Navigation',
                desc: 'Navigate indoor and outdoor environments without human input.',
              },
              {
                title: '🎯 Task-Specific Intelligence',
                desc: 'Adapt to various missions like cleaning, patrolling, or delivering.',
              },
              {
                title: '🔊 Voice & Gesture Interfaces',
                desc: 'Interact with humans using natural language or gestures.',
              },
              {
                title: '📡 IoT + Edge Integration',
                desc: 'Sync data from sensors, devices, and cloud in real-time.',
              },
              {
                title: '🔋 Smart Power Management',
                desc: 'Optimize energy usage and auto-return for charging.',
              },
            ].map((item, index) => (
              <div
                key={index}
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

      {/* 🔷 INDUSTRY USAGE SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1555617982-2b6a8f4c12d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Industry Use"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🏭 INDUSTRIAL INTELLIGENCE</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Designed for Diverse Industrial Applications
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Warehouse automation & inventory management</li>
              <li>Security surveillance and perimeter patrol</li>
              <li>Hospital delivery & sanitation bots</li>
              <li>Smart farming and harvesting automation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔷 PARALLAX CTA SECTION */}
      <section className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Take the Leap into Autonomous Robotics
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Let’s discuss how AI-powered automation can bring innovation and autonomy to your operations.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book a Discovery Call
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
