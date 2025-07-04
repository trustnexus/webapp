'use client';
import Help from "@/components/Help";
import React from "react";
import CountUp from "react-countup";

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION */}
      <section className="relative h-[500px] bg-cover bg-center bg-[url('https://assets.materialup.com/uploads/94d143a3-bad3-4e1c-b91e-1aaafbc4c2e2/preview.jpg')]">
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
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
          <div>
            <img
              src="https://cdn.dribbble.com/users/32512/screenshots/16924588/media/302a960684fda8f2c0a1e6ceac3b99b3.png"
              alt="Desktop Software"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          <div>
            <p className="text-sm text-blue-600 mb-2">💻 DESKTOP SOLUTIONS</p>
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
            <div>
              <p className="text-4xl font-bold text-blue-600"><CountUp end={50} suffix="+" enableScrollSpy /></p>
              <p className="text-gray-600 mt-2">Industry-specific applications deployed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600"><CountUp end={97} suffix="%" enableScrollSpy /></p>
              <p className="text-gray-600 mt-2">Uptime & offline reliability</p>
            </div>
            <div>
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
          <div>
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
          <div>
            <img
              src="https://cdn.dribbble.com/users/286982/screenshots/6075480/media/2f771e2b80b749f39ae96d6c5038e34c.png"
              alt="Security"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
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
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">⚙️ Custom Workflows</h3>
              <p className="text-gray-700">We build what your business truly needs — from user permissions to automated reports.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📈 Performance Focused</h3>
              <p className="text-gray-700">Our apps are optimized for high speed and heavy usage across local networks.</p>
            </div>
            <div>
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
