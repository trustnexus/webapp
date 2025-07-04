'use client';
import Help from '@/components/Help';
import React from 'react';

const page = () => {
  return (
    <>
      {/* 🔷 PARALLAX HERO SECTION */}
      <section className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1617727553254-6d4df7e4cb9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Embedded IoT Devices</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Design, develop and deploy intelligent embedded systems with real-time IoT connectivity and automation.
          </p>
        </div>
      </section>

      {/* 🔷 OVERVIEW SECTION */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* TEXT */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">📡 EMBEDDED INNOVATION</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Smart Devices That Connect the Physical World
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Embedded IoT solutions combine microcontrollers, real-time operating systems (RTOS), sensors,
              and wireless modules to build compact, efficient, and remotely accessible devices. Perfect for industrial, consumer, and research applications.
            </p>
          </div>
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091215367-71ee3c1e0896?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="IoT Embedded"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES SECTION */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: '🌡️ Sensor Integration',
                desc: 'Temperature, humidity, motion, gas, vibration & more using SPI/I2C/ADC protocols.',
              },
              {
                title: '📶 Wireless Communication',
                desc: 'Support for Wi-Fi, BLE, LoRa, Zigbee, and GSM modules for cloud/edge connectivity.',
              },
              {
                title: '🧠 Embedded AI',
                desc: 'Run ML models locally on devices using TensorFlow Lite or Edge Impulse.',
              },
              {
                title: '⚙️ RTOS & Bare Metal',
                desc: 'Low-latency systems using FreeRTOS, Zephyr, or direct firmware on MCUs.',
              },
              {
                title: '🔋 Power Optimization',
                desc: 'Ultra-low power sleep modes and energy harvesting for battery-operated devices.',
              },
              {
                title: '📲 Mobile + Cloud Sync',
                desc: 'Real-time dashboards, alerts, and mobile apps for controlling & monitoring devices.',
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

      {/* 🔷 PROJECT NUMBERS SECTION */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[
            { number: '50+', label: 'Embedded Projects Completed' },
            { number: '20+', label: 'Industries Served' },
            { number: '15+', label: 'RTOS-Based Deployments' },
            { number: '10+', label: 'Cloud-Integrated Systems' },
          ].map((item, i) => (
            <div key={i} className="p-4 border rounded-lg shadow hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-blue-600">{item.number}</h3>
              <p className="text-gray-700 mt-2 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 USE CASES SECTION */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1551969014-7d2c38368f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="IoT Device Use Cases"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          {/* TEXT */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🏭 APPLICATIONS</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Industry Use Cases
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Smart Agriculture & Soil Monitoring</li>
              <li>Industrial Automation & Predictive Maintenance</li>
              <li>Wearable Health Monitoring Devices</li>
              <li>Home Automation Systems</li>
              <li>Environmental Sensing & Disaster Alert Systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔷 PARALLAX CTA SECTION */}
      <section className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1621929512649-cfd0bfa7a2e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')]">
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bring Intelligence to Every Device
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Let’s engineer custom embedded systems tailored for your connected products.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Talk to an Embedded Expert
          </a>
        </div>
      </section>

      {/* 🔷 HELP COMPONENT */}
      <Help />
    </>
  );
};

export default page;
