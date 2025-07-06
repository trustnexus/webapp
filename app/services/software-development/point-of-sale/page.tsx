

"use client";
import Help from "@/components/Help";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = document.querySelectorAll("section");

    sections.forEach((section, index) => {
      const heading = section.querySelector("h1") || section.querySelector("h2");
      const paragraph = section.querySelector("p");
      const image = section.querySelector("img");

      if (heading) {
        gsap.from(heading, {
          opacity: 0,
          y: -50,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      }

      if (paragraph) {
        gsap.from(paragraph, {
          opacity: 0,
          y: 50,
          duration: 1.2,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "bottom 70%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      }

      if (image) {
        gsap.from(image, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 60%",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        });
      }
    });
  }, []);

  return (
    <>
      {/* 🔸 HERO SECTION: BANNER IMAGE + TEXT LEFT */}
      <section className="relative bg-[url('https://img.freepik.com/free-photo/black-friday-sales-elements-assortment-with-copy-space_23-2148665617.jpg?semt=ais_hybrid&w=740')] h-[500px] bg-center bg-cover bg-no-repeat text-white">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-8 items-center px-6 h-full">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Empower Your Business with Smart POS Solutions
            </h1>
            <p className="text-lg leading-relaxed">
              Our point-of-sale software helps you run smoother operations,
              track performance, and serve your customers better — whether
              you're running a single store or a growing chain.
            </p>
          </div>
        </div>
      </section>

      {/* 🔸 SECTION 2 */}
      <section className="relative">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-20">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Smart POS Solutions for Retail & Beyond
            </h1>
            <p className="text-lg leading-relaxed">
              Streamline your sales, inventory, and customer management with
              modern POS systems tailored to your business. Whether you're
              running a small retail shop or a multi-branch chain, our software
              adapts to your operations.
            </p>
          </div>
          <div>
            <img
              src="https://www.hashmicro.com/blog/wp-content/uploads/2025/05/9-Best-Point-of-Sale-System-for-Growing-Business-in-Singapore_-Reviewed-2025-HashMicro.webp"
              alt="POS System"
              className="rounded-lg shadow-lg hover:scale-105 duration-300"
            />
          </div>
        </div>
      </section>

      {/* 🔸 FEATURES GRID SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-[1320px] mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
            Key Features of Our POS Applications
          </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-left">
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                🧾 Real-Time Billing
              </h3>
              <p className="text-gray-700">
                Fast, efficient billing with barcode scanners, receipt printing,
                and custom discounts.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                📦 Inventory Tracking
              </h3>
              <p className="text-gray-700">
                Keep stock in check with alerts, batch tracking, and
                multi-warehouse support.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                👥 Customer Loyalty
              </h3>
              <p className="text-gray-700">
                Loyalty programs, purchase history, and offers to boost customer
                retention.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                📊 Sales Reporting
              </h3>
              <p className="text-gray-700">
                View daily, monthly, or custom reports to make smarter decisions
                in real-time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                🛒 Multi-Channel Support
              </h3>
              <p className="text-gray-700">
                Sell from store, mobile, or online — your POS stays in sync
                across platforms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                🔐 Secure User Roles
              </h3>
              <p className="text-gray-700">
                Admin, cashier, and manager roles with activity tracking and
                restricted access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔸 INDUSTRY USE CASES SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-gray-800">
            Trusted Across Industries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png"
                alt="Retail"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="font-semibold text-gray-700">Retail Stores</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
                alt="Restaurants"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="font-semibold text-gray-700">Restaurants & Cafes</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2560/2560655.png"
                alt="Pharmacies"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="font-semibold text-gray-700">Pharmacies</p>
            </div>
            <div>
              <img
                src="https://cdn-icons-png.flaticon.com/512/3465/3465536.png"
                alt="Supermarkets"
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="font-semibold text-gray-700">Supermarkets</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔸 CTA SECTION */}
      <section className="bg-blue-600 py-16 text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Upgrade Your Point of Sale?
        </h2>
        <p className="text-lg max-w-[700px] mx-auto mb-6">
          Get a customized POS solution designed to fit your business — simple
          to use, powerful under the hood.
        </p>
        <a
          href="/contact"
          className="inline-block mt-4 bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Get Started Now
        </a>
      </section>

      <Help />
    </>
  );
};

export default Page;
