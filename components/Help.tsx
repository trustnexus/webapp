import React from "react";

const Help = () => {
  return (
    <div className="flex items-center justify-center h-[460px] max-w-[1468px] p-[140px]">
      <div className="flex items-center flex-col gap-3">
        <div className="text-center">
          <h1>How can we help you?</h1>
          <p className="text-lg">
            Are you ready to push boundaries and explore new frontiers of
            innovation?
          </p>
        </div>
        <button className="px-10 py-2 bg-slate-800 text-white">
          LET'S WORK TOGETHER
        </button>
      </div>
    </div>
  );
};

export default Help;
