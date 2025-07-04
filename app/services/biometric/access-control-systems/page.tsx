'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 HERO SECTION WITH PARALLAX */}
      <section className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1573497491208-6b1acb260507?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Access Control & Face Recognition</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Secure your premises with AI-powered facial recognition and intelligent access management systems.
          </p>
        </div>
      </section>

      {/* 🔷 SECTION: OVERVIEW */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🔐 BIOMETRIC SECURITY</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              AI-Based Facial Identification & Secure Entry
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our system uses advanced computer vision and deep learning to identify individuals, verify credentials, and grant access only to authorized personnel. Integrate it with doors, gates, time attendance, or enterprise systems.
            </p>
          </div>
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1617634667036-6c642f4a65c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Face Recognition Access"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 SECTION: FEATURES GRID */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: '📸 Real-Time Face Detection',
                desc: 'Accurate detection with live camera feeds using neural networks.',
              },
              {
                title: '🧠 Deep Learning Recognition',
                desc: 'High-accuracy facial matching even with masks, glasses, or aging.',
              },
              {
                title: '🚪 Access Control Integration',
                desc: 'Trigger door locks, gates, and attendance logs from recognition result.',
              },
              {
                title: '📊 Centralized Monitoring',
                desc: 'View logs, images, and alerts on a web or mobile admin dashboard.',
              },
              {
                title: '🛡️ Anti-Spoofing Protection',
                desc: 'Liveness detection prevents photo/video spoofing and tailgating.',
              },
              {
                title: '🧾 Audit Trails & Compliance',
                desc: 'Complete tracking of access history for audits and compliance checks.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 SECTION: USE CASES */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row gap-10 items-center">
          {/* Image */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1632905397334-6469e5f9e3c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Face ID Use Cases"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🏢 APPLICATIONS</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Where It Works
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Office Premises & Enterprise Security</li>
              <li>Factories & Restricted Zones</li>
              <li>Schools, Colleges & Examination Centers</li>
              <li>Healthcare Access & Patient ID</li>
              <li>Airport Check-ins & Secure Terminals</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔷 PARALLAX CTA SECTION */}
      <section className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1621847235165-92f1ba189cfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Upgrade Your Security?
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Our facial recognition solutions can secure your premises and streamline access like never before.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book a Free Demo
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
