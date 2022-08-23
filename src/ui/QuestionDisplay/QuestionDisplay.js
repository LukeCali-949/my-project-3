import React, { useEffect, useState, useContext, useLayoutEffect } from "react";
import QuestionContext from "../../store/questions-context";
import { useParams, Link } from "react-router-dom";

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
const shuffledArr = shuffle([0, 1, 2, 3]);

const QuestionDisplay = (props) => {
  const [chosenAnswer, setChosenAnswer] = useState("Not Selected");
  const [rightOrWrong, setRightOrWrong] = useState("");

  const { questionId } = useParams();

  const correctAnswer = props.questions[questionId - 1].correct_answer;
  let answerChoices = [
    ...props.questions[questionId - 1].incorrect_answers,
    props.questions[questionId - 1].correct_answer,
  ];

  function shuffleArray(testArr, answerChoices) {
    let returnArr = [];
    for (let i = 0; i < answerChoices.length; i++) {
      returnArr.push(answerChoices[testArr[i]]);
    }

    return returnArr;
  }
  answerChoices = shuffleArray(shuffledArr, answerChoices);

  // console.log(answerChoices);

  let question = props.questions[questionId - 1].question
    .replaceAll("&#039;", "'")
    .replaceAll("&#033;", "!")
    .replaceAll("&#034;", '"')
    .replaceAll("&quot;", '"')
    .replaceAll("&euml;", "ë")
    .replaceAll("&ldquo;", '"')
    .replaceAll("&rdquo;", '"')
    .replaceAll("&deg;", "°")
    .replaceAll("&atilde;", "`");
  // console.log(props.questions);

  const onClickEvent = (event) => {
    event.preventDefault();
    const letterIndex = ["A", "B", "C", "D"][
      answerChoices.indexOf(correctAnswer)
    ];
    // console.log(correctAnswer);
    // console.log(event.target.textContent);
    // console.log(letterIndex, event.target.id);
    // console.log(correctAnswer, event.target.textContent);

    letterIndex == event.target.id
      ? setRightOrWrong("right")
      : setRightOrWrong("wrong");
    setChosenAnswer(event.target.id);
    // console.log(rightOrWrong);
  };

  const questions = answerChoices.map((questionAnswer, index) => {
    return (
      <>
        <div
          className={`flex phone:min-h-[30px] mb-3 w-full phone:w-[300px] phone:text-sm rounded bg-[#e52165] text-3xl hover:cursor-pointer  hover:scale-[1.02] hover:duration-100 hover:ease-in-out hover:shadow-[0_0.4rem_1.4rem_0_rgba(6,103,247,0.5)] focus:bg-orange-600`}
          onClick={onClickEvent}
          id={["A", "B", "C", "D"][index]}
        >
          <p className="choice-prefix" id={["A", "B", "C", "D"][index]}>
            {["A", "B", "C", "D"][index]}
          </p>
          <p
            className="choice-text choice-prefix"
            id={["A", "B", "C", "D"][index]}
          >
            {questionAnswer
              .replaceAll("&#039;", "'")
              .replaceAll("&#033;", "!")
              .replaceAll("&#034;", "'")
              .replaceAll("&quot;", '"')
              .replaceAll("&euml;", "ë")
              .replaceAll("&ldquo;", '"')
              .replaceAll("&rdquo;", '"')
              .replaceAll("&deg;", "°")
              .replaceAll("&atilde;", "`")}
          </p>
        </div>
      </>
    );
  });

  //   const ctx = useContext(QuestionContext);
  //   useEffect(() => {
  //     questionTitle = ctx.questions[0].question;
  //   }, []);

  return (
    <>
      <div className="w-full bg-[#0d1137] h-screen absolute -z-10"></div>
      <div className=" flex flex-col max-w-[50rem] items-center justify-center h-screen  mx-auto font-press-start">
        <h1 className="text-white phone:text-sm phone:px-[50px] text-3xl max-w-4xl mb-10">
          {question}
        </h1>
        <h1 className="text-white phone:text-sm">{`Question: ${questionId}/10`}</h1>
        {questions}
        <h1 className="text-white phone:text-sm">{`Your Answer: ${chosenAnswer}`}</h1>
        {/* <h1 className="text-white">{`Your answer is: ${rightOrWrong}`}</h1> */}
        {chosenAnswer === "Not Selected" && (
          <div className="absolute px-[250px] py-[70px] bg-transparent top-[720px] z-20 opacity-10 hover:cursor-not-allowed"></div>
        )}

        <Link
          className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center mt-12"
          onClick={() => {
            props.onAddCorrectAnswer(rightOrWrong);
            setRightOrWrong("");
            setChosenAnswer("Not Selected");
          }}
          to={
            Number(questionId) !== 10
              ? `/question/${Number(questionId) + 1}`
              : "/results"
          }
        >
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
          <span className="relative text-black group-hover:text-white">
            Click to Confirm
          </span>
        </Link>
      </div>
    </>
  );
};

/*
<div class="container">
      <div class="justify-center flex-col">
        <div>
          <div>
            <p class="hud-prefix">Question</p>
            <div>
              <div></div>
            </div>
          </div>
          <div>
            <p class="hud-prefix">Score</p>
            <h1 class="text-center">0</h1>
          </div>
        </div>
        <h1 id="question">What is the answer to this question</h1>
        <div class="choice-container">
          <p class="choice-prefix">A</p>
          <p class="choice-text" data-number="1">
            Choice
          </p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">B</p>
          <p class="choice-text" data-number="2">
            Choice 2
          </p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">C</p>
          <p class="choice-text" data-number="3">
            Choice 3
          </p>
        </div>
        <div class="choice-container">
          <p class="choice-prefix">D</p>
          <p class="choice-text" data-number="4">
            Choice 4
          </p>
        </div>
      </div>
    </div>
  );

<>







      <div className="w-full bg-[#43400D] h-screen absolute -z-10"></div>
      {props.questions[questionId - 1].question}
      <Link
        className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center mt-12"
        to={`/question/${Number(questionId) + 1}`}
      >
        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
        <span className="relative text-black group-hover:text-white">
          Next Question
        </span>
      </Link>
    </>
*/
export default QuestionDisplay;
