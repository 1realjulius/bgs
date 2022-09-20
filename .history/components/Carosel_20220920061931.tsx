import Image from "next/image";
import React, { useState } from "react";

const Carosel = () => {
  const [index, setIndex] = useState(0);
  const [index1, setIndex1] = useState(0);

  const Images = [
    { id: 1, image: "/Assets/floss.png" },
    { id: 2, image: "/Assets/bright-rain.png" },
    { id: 3, image: "/Assets/moonrise.png" },
  ];
  return (
    <div>
      <div>This is the carosel</div>
      <div className="relative h-[720px] w-[1080] overflow-hidden">
        {Images.map((slide, index) => (
          <div>
            <Image
              src={slide.image}
              width={1080}
              height={720}
              alt=""
              className=" absolute object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosel;
