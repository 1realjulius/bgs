import Image from "next/image";
import React from "react";

const Backgs = () => {
  return (
    <div className="">
      <div>
        <div className="relative z-10">
          <div className="absolute top-0">Joy</div>
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
