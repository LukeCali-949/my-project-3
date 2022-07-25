import React, { useState } from "react";

const StartingScreen = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onBeginClick = () => {
    setButtonClicked(true);
  };
  return (
    <div>
      <div className="w-full bg-golden-rod h-screen absolute -z-10"></div>

      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-c font-press-start mb-3">
          Welcome to ultimate trivia!
        </h1>
        <a
          onClick={onBeginClick}
          class="relative inline-block px-4 py-2 font-medium group "
        >
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span class="relative text-black group-hover:text-white">
            Click To Begin
          </span>
        </a>
      </div>
    </div>
  );
};

export default StartingScreen;
