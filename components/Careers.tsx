import React from "react";

const Careers = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source
          src="https://www.systemsltd.com/sites/default/files/2023-02/home-careers.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay (optional for darkening the video) */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Foreground Content */}
      <div className="relative -bottom-34 z-20 flex flex-col items-center gap-6 justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Your next starts right here
        </h1>
        <button className="border-white border-[1px] text-white hover:bg-gray-700 hover:animate-pulse hover:scale-[1.15] font-semibold px-6 py-3 rounded hover:bg-opacity-90 transition">
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Careers;
