import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="bg-[url('https://via.placeholder.com/1920x600')] bg-no-repeat bg-center bg-cover w-full h-[500px] flex items-center justify-center text-white relative"
        style={{
          backgroundImage: "url('path-to-your-neon-background-image.jpg')", // Replace with actual image path
        }}
      >
        {/* Navigation Bar */}
        <nav className="absolute top-0 w-full bg-transparent py-4 px-6 flex justify-between items-center">
          <div className="text-white text-lg font-semibold">systems</div>
          <div className="flex space-x-6">
            <Link href="/services" className="text-white hover:underline">
              Services
            </Link>
            <Link href="/industries" className="text-white hover:underline">
              Industries
            </Link>
            <Link href="/insights" className="text-white hover:underline">
              Insights
            </Link>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
            <Link href="/careers" className="text-white hover:underline">
              Careers
            </Link>
            <Link href="/investors" className="text-white hover:underline">
              Investors
            </Link>
          </div>
          <div className="flex space-x-2">
            <span className="text-white">PKR18.04 -0.04683%</span>
            <button className="text-white">Q</button>
            <button className="text-white">🌐</button>
            <button className="text-white">⋮</button>
          </div>
        </nav>

        {/* Forbes Badge */}
        <div className="text-center">
          <img
            src="https://via.placeholder.com/300x200" // Replace with actual Forbes badge image path
            alt="Forbes Asia Best Under a Billion 2024"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Rest of your content (Search Section, Case Studies, etc.) */}
      {/* Keep the existing sections as they are or modify as needed */}
    </div>
  );
};

export default Page;