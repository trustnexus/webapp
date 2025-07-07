"use client";
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import CountUp from 'react-countup';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, i) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'top center',
            scrub: 2,
          },
        }
      );
    });

    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      const x = i % 2 === 0 ? -80 : 80;
      gsap.fromTo(
        img,
        { opacity: 0, x },
        {
          opacity: 1,
          x: 0,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: img,
            start: 'top bottom',
            end: 'top center',
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const setSectionRef = (el: HTMLDivElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  const setImageRef = (el: HTMLImageElement | null, i: number) => {
    imageRefs.current[i] = el;
  };

  return (
    <>
      {/* 🔷 PARALLAX HERO SECTION */}
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 0)} className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://img.freepik.com/premium-vector/internet-things-iot-concept-iot-design-dark-blue-background_387612-120.jpg')]">
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">Embedded IoT Devices</h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Design, develop and deploy intelligent embedded systems with real-time IoT connectivity and automation.
          </p>
        </div>
      </section>

      {/* 🔷 OVERVIEW SECTION */}
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 1)} className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
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
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 0)}
              src="https://www.speranzainc.com/wp-content/uploads/2021/11/%E5%9C%96%E7%89%87-1-4-719x400.jpg"
              alt="IoT Embedded"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔷 FEATURES SECTION */}
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 2)} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Core Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[ {
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
              },].map((cap, i) => (
              <div
                key={i}
                ref={(el) => setSectionRef(el as HTMLDivElement, i + 3)}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-600 mb-2">{cap.title}</h3>
                <p className="text-gray-700">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔷 PROJECT NUMBERS SECTION */}
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 9)} className="bg-white py-20 px-4">
        <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
          {[ { number: 50, label: 'Embedded Projects Completed' },
            { number: 20, label: 'Industries Served' },
            { number: 15, label: 'RTOS-Based Deployments' },
            { number: 10, label: 'Cloud-Integrated Systems' },].map((num, i) => (
            <div key={i} ref={(el) => setSectionRef(el, i + 10)} className="p-4 border rounded-lg shadow hover:scale-105 transition">
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={num.number} enableScrollSpy suffix='+' />
              </h3>
              <p className="text-gray-700 mt-2 text-lg">{num.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🔷 USE CASES SECTION */}
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 20)} className="py-20 px-4 bg-gray-50">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 1)}
              src="https://www.researchgate.net/publication/342597076/figure/fig6/AS:918563955159044@1596014121499/A-subset-of-IoT-and-IIoT-use-cases-are-illustrated.ppm"
              alt="IoT Device Use Cases"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
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
      <section ref={(el) => setSectionRef(el as HTMLDivElement, 21)} className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://intechhouse.com/wp-content/uploads/2023/03/new-automated-documentation-platform-utilizing-blockchain-technology-ensure-integrity-security-1024x630.jpg')]">
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
