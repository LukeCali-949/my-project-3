import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AudioPlayer from "../../extraComponents/AudioPlayer/AudioPlayer";
import wiiMusic1 from "../../audio/cocomall.mp3";
import wiiMusic2 from "../../audio/lastplacemkwii.mp3";
import wiiMusic3 from "../../audio/firstplacemkwii.mp3";
import afterDark from "../../audio/mrkittyaftdark.mp3";

const ResultsDisplay = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [allCorrect, setAllCorrect] = useState(false);

  const countOccurrences = (arr, val) =>
    arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
  const rightAnswers = countOccurrences(props.correctArr, "right");
  useEffect(() => {
    if (rightAnswers === 10) {
      setAllCorrect(true);
    }
  }, [allCorrect]);

  const onExitPage = () => {
    setIsClicked(false);
  };

  const results = props.correctArr.map((elem, index) => {
    return (
      <div className="px-10">
        <h1
          className={`text-xl   my-12 font-press-start ${
            elem === "right" ? "text-[#3cfa23]" : "text-[#540808]"
          }`}
          key={index}
        >
          {`Your answer to question ${index + 1}: ${props.questions[
            index
          ].question
            .replaceAll("&#039;", "'")
            .replaceAll("&#033;", "!")
            .replaceAll("&#034;", "'")
            .replaceAll("&quot;", '"')
            .replaceAll("&euml;", "ë")
            .replaceAll("&ldquo;", '"')
            .replaceAll("&rdquo;", '"')
            .replaceAll("&deg;", "°")} was ${elem}
        `}
        </h1>
        <h1
          className={`text-xl   my-12 font-press-start ${
            elem === "right" ? "text-[#3cfa23]" : "text-[#540808]"
          }`}
        >
          {`Correct Answer: ${props.questions[index].correct_answer}`}
        </h1>
      </div>
    );
  });

  return (
    <React.Fragment>
      <div className="bg-[#0d1137] ">
        <div className="flex flex-col justify-center items-center text-center  min-h-screen">
          <div className="rounded-lg shadow-lg bg-[#e52165] max-w-[1300px] h-auto">
            <h1 className="text-white text-3xl font-press-start mt-5 phone:mt-[80px]">{`Your Score: ${rightAnswers}/10`}</h1>

            {results}
            {<AudioPlayer url={wiiMusic1} isClicked={isClicked} />}
            <Link
              className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center my-12 font-press-start mt-5"
              to="/"
              disabled
              onClick={() => {
                setInterval(() => window.location.reload(true), 10);
                props.resetAnswerArray();
                onExitPage();
              }}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white ">
                Done
              </span>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResultsDisplay;
