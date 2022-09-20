import Image from "next/image";
import React, { useState } from "react";

const Carosel = () => {
  const Images = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
  ];

  const [current, setCurrent] = useState(0);
  const slideLength = Images.length;

  if (!Array.isArray(Images) || Images.length <= 0) {
    return null;
  }

  const nextSlide = () => {
    setCurrent(current === slideLength - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? slideLength - 1 : current - 1);
  };

  return (
    <div>
      <div>This is the carosel</div>
      <div className="flex flex-row items-center space-x-6">
        {/* Arrow Left */}
        <div>
          <button onClick={prevSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        {/* Arrow Right */}
        <div>
          <button onClick={nextSlide}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex h-[720px] w-[1080] items-center justify-center">
        {Images.map((slide, index) => (
          <div
            className={
              index === current
                ? "slide active transition duration-200"
                : "slide"
            }
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                width={1080}
                height={720}
                alt=""
                className=" absolute object-contain"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carosel;
