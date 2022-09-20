import Image from "next/image";
import React, { useState } from "react";

const Carosel = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  const Images = [
    "/Assets/floss.png",
    "/Assets/bright-rain.png",
    "/Assets/moonrise.png",
  ];
  return (
    <div>
      <div>This is the carosel</div>
      <div className="relative h-[720px] w-[1080] overflow-hidden">
        <Image
          src={"/Assets/floss.png"}
          width={1080}
          height={720}
          alt=""
          className=" absolute object-contain"
        />
      </div>
    </div>
  );
};

export default Carosel;
