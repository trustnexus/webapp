
import React from "react";

const Help = () => {
  return (
    <div className="flex items-center justify-center h-auto min-h-[460px] px-6 py-16 md:py-[100px] bg-white">
      <div className="flex items-center flex-col gap-6 max-w-[800px] text-center">
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold mb-2">
            How can we help you?
          </h1>
          <p className="text-base md:text-lg text-gray-700">
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </p>
        </div>
        <button className="px-6 py-3 text-sm md:text-base bg-slate-800 text-white rounded-md hover:bg-slate-700 transition duration-300">
          LET'S WORK TOGETHER
        </button>
      </div>
    </div>
  );
};

export default Help;
