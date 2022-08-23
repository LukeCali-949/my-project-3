import React, { useState, useContext } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import QuestionContext from "../../store/questions-context";

const HomeScreen = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  const onBeginClick = () => {
    setButtonClicked(true);
  };
  return (
    <div>
      <div className="w-full bg-[#e52165] h-screen absolute -z-10"></div>
      <div className="w-full h-5 bg-[#0d1137] absolute top-[50px]"></div>
      <div className="w-full h-5 bg-[#0d1137] absolute bottom-[50px]"></div>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="phone:text-[12px] font-press-start mb-3">
          Welcome to ultimate trivia!
        </h1>
        <Link
          onClick={onBeginClick}
          className="relative inline-block px-4 py-2 font-medium group cursor-pointer "
          to="/begin"
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Click To Begin
          </span>
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
