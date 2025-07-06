'use client';
import Help from "@/components/Help";
import CountUp from "react-countup";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const page = () => {
  gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  // Hero Section
  gsap.from(".heroText", {
    y: 50,
    opacity: 0,
    duration: 1.5,
    ease: "power3.out",
  });

  // Section 2 (Image Left, Text Right)
  gsap.from(".section2Image", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section2Image",
      start: "top 90%",
    },
  });
  gsap.from(".section2Text", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section2Text",
      start: "top 90%",
    },
  });

  // Section 3 (Stats)
  gsap.from(".statBox", {
    y: 60,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3,
    scrollTrigger: {
      trigger: ".statBox",
      start: "top 95%",
    },
  });

  // Section 4 (Text Left, Image Right)
  gsap.from(".section4Text", {
    x: -100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section4Text",
      start: "top 90%",
    },
  });
  gsap.from(".section4Image", {
    x: 100,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: ".section4Image",
      start: "top 90%",
    },
  });

  // Section 5 (Why Choose Us - Cards)
  gsap.from(".featureCard", {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".featureCard",
      start: "top 95%",
    },
  });
}, []);

  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section className="relative h-[500px] bg-cover bg-center bg-[url('https://img.freepik.com/free-photo/flat-lay-workstation-with-copy-space-laptop_23-2148430879.jpg?semt=ais_hybrid&w=740')]">
        <div className="heroText absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Powerful Desktop Applications for Modern Enterprises
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            We build robust, secure, and scalable desktop apps tailored to your internal operations and end-user experience.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION 2: IMAGE LEFT - TEXT RIGHT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="section2Image overflow-hidden">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20230722/pngtree-software-developer-conducting-quality-testing-on-3d-gaming-and-applications-image_3771482.jpg"
              alt="Desktop Software"
              className=" shadow-md hover:scale-125 duration-300"
            />
          </div>
          <div>
            <p className="text-sm text-blue-600 mb-2 section2Text">💻 DESKTOP SOLUTIONS</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Build Software That Works Offline & Performs Online
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              From finance and inventory systems to custom enterprise tools, we build desktop apps
              using technologies like Electron, .NET, and Python. These applications offer fast execution,
              native OS access, and data security even without the internet.
            </p>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 3: STATS CENTERED */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Empower Your Team with Desktop Precision
          </h2>
          <p className="text-gray-600 text-lg max-w-[700px] mx-auto mb-10">
            Our desktop applications streamline operations, reduce downtime, and deliver seamless
            experiences in industries like healthcare, logistics, retail, and more.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="statBox">
              <p className="text-4xl font-bold text-blue-600"><CountUp end={50} suffix="+" enableScrollSpy /></p>
              <p className="text-gray-600 mt-2">Industry-specific applications deployed</p>
            </div>
            <div className="statBox">
              <p className="text-4xl font-bold text-blue-600"><CountUp end={97} suffix="%" enableScrollSpy /></p>
              <p className="text-gray-600 mt-2">Uptime & offline reliability</p>
            </div>
            <div className="statBox">
              <p className="text-4xl font-bold text-blue-600"><CountUp end={27} suffix="+" enableScrollSpy /></p>
              <p className="text-gray-600 mt-2">Large-scale internal tools developed</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 4: IMAGE RIGHT - TEXT LEFT */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="section4Text">
            <p className="text-sm text-blue-600 mb-2">🔐 ENTERPRISE SECURITY</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Security at Every Layer
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our desktop applications come equipped with top-tier security protocols including local encryption,
              role-based access control, and network shielding. Protect sensitive enterprise data while maintaining usability.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We follow OWASP, HIPAA, and industry best practices to build software you can trust.
            </p>
          </div>

          {/* Image */}
          <div  className="section4Image overflow-hidden">
            <img
              src="https://img.freepik.com/free-photo/cyber-security-concept-digital-art_23-2151637760.jpg?semt=ais_hybrid&w=740"
              alt="Security"
              className=" shadow-md hover:scale-125 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION 5: CLIENT VALUE - ICON GRID */}
      <section className="bg-gray-100 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-800">
            Why Enterprises Choose Our Desktop Applications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            <div className="featureCard">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">⚙️ Custom Workflows</h3>
              <p className="text-gray-700">We build what your business truly needs — from user permissions to automated reports.</p>
            </div>
            <div className="featureCard">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📈 Performance Focused</h3>
              <p className="text-gray-700">Our apps are optimized for high speed and heavy usage across local networks.</p>
            </div>
            <div className="featureCard">
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🌐 Seamless Integration</h3>
              <p className="text-gray-700">Connect with existing databases, CRMs, and ERP systems for unified operations.</p>
            </div>
          </div>
        </div>
      </section>

      <Help />
    </>
  );
};

export default page;
