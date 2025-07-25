"use client";
import Help from '@/components/Help';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
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

    imageRefs.current.forEach((img, index) => {
      if (!img) return;
      const x = index % 2 === 0 ? 80 : -80;
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

  const setSectionRef = (el: HTMLDivElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

  return (
    <>
      {/* 🔹 HERO PARALLAX SECTION */}
      <section
        ref={(el) =>{ setSectionRef(el as HTMLDivElement | null, 0)}}
        className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://www.shutterstock.com/image-photo/artificial-intelligence-future-technology-communication-600nw-1009099186.jpg')]"
      >
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Robotics Simulation & Testing
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Validate performance, safety, and behavior of robotic systems through advanced digital simulation environments.
          </p>
        </div>
      </section>

      {/* 🔹 SECTION 2: TEXT + IMAGE */}
      <section ref={(el) => {setSectionRef(el as HTMLDivElement | null, 1)}} className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🧪 DIGITAL TWIN VALIDATION</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Simulate Real-World Scenarios Before Deployment
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our simulation platforms replicate physical environments, mechanical behaviors, and sensor feedback. It allows you to test autonomous logic, obstacle avoidance, and system limits — all in a virtual setting before physical integration.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 0)}
              src="https://i.ytimg.com/vi/w-L90BhfDFo/maxresdefault.jpg"
              alt="Simulation Testing"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔹 SECTION 3: FEATURES GRID */}
      <section ref={(el) => {setSectionRef(el as HTMLDivElement | null, 2)}} className="bg-gray-50 py-20 px-4">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Simulation Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: '🌐 3D Environment Simulation',
                desc: 'Test navigation, sensor feedback, and interaction in virtual 3D terrains.',
              },
              {
                title: '⚙️ Hardware-in-the-Loop (HIL)',
                desc: 'Integrate real hardware into simulation loops for hybrid testing.',
              },
              {
                title: '📈 Performance Benchmarking',
                desc: 'Measure KPIs like speed, response time, battery consumption, and safety margin.',
              },
              {
                title: '📸 Sensor Fusion Testing',
                desc: 'Simulate LIDAR, camera, and ultrasonic data input for perception testing.',
              },
              {
                title: '🛡️ Failure Scenarios',
                desc: 'Run stress tests, unexpected failures, and decision-making edge cases.',
              },
              {
                title: '🚀 Robot Deployment Preview',
                desc: 'Use digital twin preview before real-world rollouts for time-saving decisions.',
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

      {/* 🔹 SECTION 4: USE CASES */}
      <section ref={(el) => {setSectionRef(el as HTMLDivElement | null, 3)}} className="py-20 px-4 bg-white">
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 1)}
              src="https://robodk.com/blog/wp-content/uploads/2020/06/Robot-Simulation-Turntable.jpg"
              alt="Robotic Simulator"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🏗️ INDUSTRIAL SIMULATION</p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Use Cases Across Industries
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Factory automation & line optimization</li>
              <li>Drone mission rehearsal and mapping</li>
              <li>Autonomous vehicle route testing</li>
              <li>Warehouse robotic simulations</li>
              <li>Medical & surgical robot safety testing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 PARALLAX CTA SECTION */}
      <section
        ref={(el) => setSectionRef(el as HTMLDivElement | null, 4)}
        className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://www.nvidia.com/content/dam/en-zz/Solutions/use-cases/robot-learning/robot-case-study-og-100.jpg')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let’s Simulate Before You Build
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Reduce risk, cost, and time-to-market by validating robotic workflows in virtual environments.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Book a Simulation Demo
          </a>
        </div>
      </section>

      {/* 🔹 HELP SECTION */}
      <Help />
    </>
  );
};

export default page;