import React from "react";

const Backgs = () => {
  return (
    <div className="absolute top-0 text-white">
      <div>bgs</div>
      <div className="relative">
        <div className="absolute top-0 h-20 w-20 rounded-full bg-blue-200 blur-xl filter"></div>
        <div className="absolute top-10 h-40 w-20 rounded-full bg-yellow-200 blur-xl filter"></div>
      </div>
    </div>
  );
};

export default Backgs;
