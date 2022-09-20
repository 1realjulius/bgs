import Image from "next/image";
import React from "react";

const Backgs = () => {
  return (
    <div className="">
      <div>
        <div className="relative z-10 min-h-screen w-full">
          <div className="absolute top-0">Joy</div>
          <div className="buttom-0 absolute">Joy 1</div>
          <div className="absolute left-0">Joy 4</div>
          <div className="absolute right-0">Joy 3</div>
        </div>
        <Image
          src="/Assets/floss.png"
          // width={72}
          // height={72}
          layout="fill"
          alt=""
          className="z-0"
        />
      </div>
    </div>
  );
};

export default Backgs;
