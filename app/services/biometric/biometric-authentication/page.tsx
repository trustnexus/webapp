"use client";
import Help from "@/components/Help";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    sectionRefs.current.forEach((section, index) => {
      if (!section) return;
      const y = index % 2 === 0 ? 80 : -80;
      gsap.fromTo(
        section,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "top center",
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
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "top center",
            scrub: 2,
          },
        }
      );
    });
  }, []);

  const setSectionRef = (el: HTMLElement | null, index: number) => {
    if (el) sectionRefs.current[index] = el;
  };

  const setImageRef = (el: HTMLImageElement | null, index: number) => {
    if (el) imageRefs.current[index] = el;
  };

  return (
    <>
      {/* 🔹 HERO SECTION WITH PARALLAX */}
      <section
        ref={(el) => setSectionRef(el, 0)}
        className="relative h-[550px] bg-fixed bg-center bg-cover bg-[url('https://media.istockphoto.com/id/1175502114/photo/fingerprint-biometric-digital-scan-technology.jpg?s=612x612&w=0&k=20&c=x6FZ-l-b-oPmAkMjo3qdwAdgWyhzY4Y1qJlza47WOp4=')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Biometric Authentication Systems
          </h1>
          <p className="mt-4 text-lg sm:text-xl max-w-[700px]">
            Secure, fast, and intelligent identity verification using
            fingerprint, facial, iris, and voice recognition.
          </p>
        </div>
      </section>

      {/* 🔹 OVERVIEW SECTION */}
      <section
        ref={(el) => setSectionRef(el, 1)}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* TEXT */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">🔐 ADVANCED SECURITY</p>
            <h2 className="text-3xl sm:text-5xl font-light mb-4">
              Smarter Access Control Through Biometrics
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our biometric solutions integrate cutting-edge AI and sensor
              technology to authenticate individuals based on their unique
              physical traits — enabling accurate, fraud-proof access in
              real-time.
            </p>
          </div>
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 0)}
              src="https://vidyan.in/wp-content/uploads/2022/08/B2-1.jpg"
              alt="Biometric System"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔹 FEATURES GRID */}
      <section
        ref={(el) => setSectionRef(el, 2)}
        className="bg-gray-50 py-20 px-4"
      >
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Core Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 text-left">
            {[
              {
                title: "📇 Fingerprint Recognition",
                desc: "Capture and match fingerprint patterns using advanced sensors and AI.",
              },
              {
                title: "📸 Facial Recognition",
                desc: "Identify individuals using deep learning-based face mapping and detection.",
              },
              {
                title: "👁️ Iris & Retina Scanning",
                desc: "Use eye-based biometrics for high-security and contactless authentication.",
              },
              {
                title: "🗣️ Voice Recognition",
                desc: "Verify identity through speech patterns and vocal analysis.",
              },
              {
                title: "📱 Mobile Biometric SDKs",
                desc: "Integrate our biometric modules into your mobile or web applications easily.",
              },
              {
                title: "🔍 Liveness Detection",
                desc: "Prevent spoofing attacks using real-time motion and thermal analysis.",
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

      {/* 🔹 USE CASES SECTION */}
      <section
        ref={(el) => setSectionRef(el, 3)}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-[1320px] mx-auto flex flex-col md:flex-row-reverse items-center gap-10">
          {/* IMAGE */}
          <div className="md:w-1/2">
            <img
              ref={(el) => setImageRef(el, 1)}
              src="https://www.thalesgroup.com/sites/default/files/gemalto/what-is-biometrics.jpg"
              alt="Use Cases"
              className="rounded-xl shadow-md hover:scale-105 duration-300"
            />
          </div>
          {/* TEXT */}
          <div className="md:w-1/2">
            <p className="text-sm text-blue-600 mb-2">
              🏢 INDUSTRY APPLICATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-light mb-4">
              Biometric Solutions for Every Industry
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Secure building and access control</li>
              <li>Banking & FinTech KYC processes</li>
              <li>Healthcare patient identity management</li>
              <li>Government e-passports and border control</li>
              <li>Workforce attendance systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 🔹 PARALLAX CTA SECTION */}
      <section
        ref={(el) => setSectionRef(el, 4)}
        className="relative h-[350px] bg-fixed bg-center bg-cover bg-[url('https://mountkenyatimes.co.ke/wp-content/uploads/2023/07/Comparative-Analysis-of-Biometrics-Passwords-Patterns.jpg')]"
      >
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white text-center px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Secure with Biometrics?
          </h2>
          <p className="text-lg max-w-[700px] mb-6">
            Explore how our biometric systems can improve security, convenience,
            and compliance for your organization.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Schedule a Free Demo
          </a>
        </div>
      </section>

      {/* 🔹 HELP SECTION */}
      <Help />
    </>
  );
};

export default Page;
