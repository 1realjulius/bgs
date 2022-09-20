import React from "react";

const Backgs = () => {
  return (
    <div className="absolute top-0 text-white">
      <div>bgs</div>
      <div className="relative">
        <div className="absolute top-0 h-20 w-20 rounded-full bg-blue-200 blur-xl filter"></div>
        <div className="absolute top-20 h-40 w-40 rounded-full bg-yellow-200 blur-xl filter"></div>
        <div className="left-30 absolute top-0 h-40 w-40 rounded-full bg-red-200 blur-xl filter"></div>
        <div className="absolute top-0 right-10 h-40 w-40 rounded-full bg-green-200 blur-xl filter"></div>
      </div>
    </div>
  );
};

export default Backgs;
