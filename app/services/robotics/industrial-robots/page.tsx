"use client";
import Help from "@/components/Help";
import React from "react";

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION WITH PARALLAX BACKGROUND */}
      <section className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1629904853716-f0bc54eea481?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
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
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
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
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1605731412007-03b8c3c6d0af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Industrial Robots"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
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
      {/* 🔷 FLEX SECTION 1: BENEFITS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1600250403213-b9f95f0d0c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Robotics Benefits"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
          {/* Text */}
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

      {/* 🔷 FLEX SECTION 2: INDUSTRIES WE SERVE */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1579154204601-01588f351e5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Industries Served"
              className="rounded-xl shadow-lg hover:scale-105 duration-300"
            />
          </div>
          {/* Text */}
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

      {/* 🔷 PARALLAX CTA SECTION */}
      <section className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1581094474535-2190e91f9710?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
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
