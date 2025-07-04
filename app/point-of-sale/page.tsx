'use client';
import Help from "@/components/Help";
import React from "react";

const page = () => {
  return (
    <>
      {/* 🔸 HERO SECTION: BANNER IMAGE + TEXT LEFT */}
      <section className="relative bg-gray-900 text-white">
        <div className="max-w-[1320px] mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-20">
          {/* Text */}
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Smart POS Solutions for Retail & Beyond
            </h1>
            <p className="text-lg leading-relaxed">
              Streamline your sales, inventory, and customer management with modern POS systems tailored to your business.
              Whether you're running a small retail shop or a multi-branch chain, our software adapts to your operations.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://cdn.dribbble.com/users/722835/screenshots/16810006/media/4872b34a24f16d21a5f15cb3dd5a7d45.png"
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
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🧾 Real-Time Billing</h3>
              <p className="text-gray-700">Fast, efficient billing with barcode scanners, receipt printing, and custom discounts.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📦 Inventory Tracking</h3>
              <p className="text-gray-700">Keep stock in check with alerts, batch tracking, and multi-warehouse support.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">👥 Customer Loyalty</h3>
              <p className="text-gray-700">Loyalty programs, purchase history, and offers to boost customer retention.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">📊 Sales Reporting</h3>
              <p className="text-gray-700">View daily, monthly, or custom reports to make smarter decisions in real-time.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🛒 Multi-Channel Support</h3>
              <p className="text-gray-700">Sell from store, mobile, or online — your POS stays in sync across platforms.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600 mb-2">🔐 Secure User Roles</h3>
              <p className="text-gray-700">Admin, cashier, and manager roles with activity tracking and restricted access.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔸 INDUSTRY USE CASES SECTION */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-[1320px] mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-800">
            Trusted Across Industries
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Retail" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-semibold text-gray-700">Retail Stores</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png" alt="Restaurants" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-semibold text-gray-700">Restaurants & Cafes</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/2560/2560655.png" alt="Pharmacies" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-semibold text-gray-700">Pharmacies</p>
            </div>
            <div>
              <img src="https://cdn-icons-png.flaticon.com/512/3465/3465536.png" alt="Supermarkets" className="w-16 h-16 mx-auto mb-4" />
              <p className="font-semibold text-gray-700">Supermarkets</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🔸 CTA SECTION */}
      <section className="bg-blue-600 py-16 text-white text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Upgrade Your Point of Sale?</h2>
        <p className="text-lg max-w-[700px] mx-auto mb-6">
          Get a customized POS solution designed to fit your business — simple to use, powerful under the hood.
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

export default page;
