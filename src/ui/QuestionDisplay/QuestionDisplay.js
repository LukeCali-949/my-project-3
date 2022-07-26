import React, { useEffect, useState, useContext } from "react";
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

const QuestionDisplay = (props) => {
  const { questionId } = useParams();
  let answerChoices = shuffle([
    ...props.questions[questionId - 1].incorrect_answers,
    props.questions[questionId - 1].correct_answer,
  ]);
  console.log(answerChoices);

  console.log(props.questions);
  const questions = answerChoices.map((questionAnswer) => {
    return (
      <>
        <div className="choice-container">
          <p className="choice-prefix">A</p>
          <p className="choice-text choice-prefix">{questionAnswer}</p>
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
      <div className="w-full bg-[#1d1a1a] h-screen absolute -z-10"></div>
      <div className=" flex flex-col max-w-[50rem] items-center justify-center h-screen  mx-auto font-press-start">
        {questions}
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
