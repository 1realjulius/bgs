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
    </div>
  );
};

export default Carosel;
