import Image from "next/image";
import React from "react";

const Backgs = () => {
  return (
    <div className=" absolute top-0 overflow-hidden">
      <div>
        <Image
          src="/Assets/floss.png"
          // width={72}
          // height={72}
          layout="fill"
          alt=""
          className=""
        />
      </div>
    </div>
  );
};

export default Backgs;
