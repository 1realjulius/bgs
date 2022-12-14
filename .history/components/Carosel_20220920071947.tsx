import Image from "next/image";
import React, { useState } from "react";

const Carosel = () => {
  const Images = [
    { id: 1, image: "/Assets/bright-rain.png" },
    { id: 2, image: "/Assets/floss.png" },
    { id: 3, image: "/Assets/moonrise.png" },
    { id: 4, image: "/Assets/landscape.jpg" },
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
      <div className="min-w-screen relative flex min-h-screen">
        {/* This is the image */}
        {Images.map((slide, index) => (
          <div
            className={
              index === current
                ? "slide active h-screen w-screen overflow-hidden transition duration-500"
                : "slide transition duration-100"
            }
            key={index}
          >
            {index === current && (
              <Image
                src={slide.image}
                // width={1080}
                // height={720}
                layout="fill"
                alt=""
                className=" absolute object-cover"
              />
            )}
          </div>
        ))}
        {/* the header */}
        <div className="absolute top-1">This is the carosel</div>
        {/* Down Section */}
        <div className="absolute bottom-4 flex w-full flex-row bg-blue-100"></div>
        {/* The btbs */}
        <div className="absolute bottom-4 right-4 flex flex-row items-center space-x-6">
          {/* Arrow Left */}
          <div>
            <button
              onClick={prevSlide}
              className="flex items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
          {/* Arrow Right */}
          <div>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center rounded-full p-2 hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-8 w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* The current Image Count */}
        <div className="absolute left-auto bottom-2 right-auto">
          <h1>
            {current + 1}/{slideLength}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
