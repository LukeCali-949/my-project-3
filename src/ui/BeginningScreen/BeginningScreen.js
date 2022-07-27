import React, { useContext, useEffect, useState } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import QuestionContext from "../../store/questions-context";

const BeginningScreen = (props) => {
  // const ctx = useContext(QuestionContext);

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [responseCode, setResponseCode] = useState("");

  useEffect(() => {
    if (category && difficulty) {
      if (category === "random") {
        fetch(
          `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`
        )
          .then((res) => res.json())
          .then((data) => {
            props.setQuestions(data.results);
            setResponseCode(data.response_code);
            console.log(responseCode);
          });
      } else {
        const arr = [
          "general-knowledge",
          "entertainment-books",
          "entertainment-film",
          "entertainment-music",
          "entertainment-musicals-theatres",
          "entertainment-video-games",
          "entertainment-board-games",
          "science-nature",
          "computers",
          "mathmatics",
          "mythology",
          "sports",
          "geography",
          "history",
          "politics",
          "art",
          "celebrites",
          "animals",
        ];
        fetch(
          `https://opentdb.com/api.php?amount=10&category=${
            arr.indexOf(category) + 10
          }&difficulty=${difficulty}&type=multiple`
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            props.setQuestions(data.results);
            setResponseCode(data.response_code);
            console.log(responseCode);
          });
      }
    }
  }, [category, difficulty]);

  const onChangeCategory = (event) => {
    setCategory(event.target.value);
    // console.log(category, difficulty);
  };

  const onChangeDifficulty = (event) => {
    // console.log(event.target);
    setDifficulty(event.target.value);
    // console.log(category, difficulty);
  };

  // useEffect(() => {
  //   console.log(ctx.questions);
  // }, [ctx.questions]);

  const onBeginClick = () => {
    console.log("hey");
    // fetch(
    //   "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    // )
    //   .then((res) => res.json())
    //   .then((data) => ctx.onGetQuestions(data.results));
  };

  return (
    <>
      <div className="w-full bg-golden-rod h-screen absolute -z-10"></div>

      <div className="flex justify-center items-center text-center  min-h-screen">
        <div className="rounded-lg shadow-lg bg-white max-w-xl h-96">
          <div className="p-6 justify-center">
            <h5 className="text-gray-900 text-xl font-medium mb-2 justify-self-center  font-press-start">
              Please Pick Your Configurations
            </h5>
            {/* <p class="text-gray-700 text-base mb-4 text-left">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}

            <div className="flex space-x-3 items-center mt-5">
              <h5>Category:</h5>
              <select
                id="countries"
                className="max-w-[200px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={onChangeCategory}
                value={category}
              >
                <option selected="">Choose a trivia category</option>
                <option value="general-knowledge">General Knowledge</option>
                <option value="mythology">Mythology</option>
                <option value="sports">Sports</option>
                <option value="art">Art</option>
              </select>
              <h5>or</h5>
              <button
                type="button"
                class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                value="random"
                onClick={onChangeCategory}
              >
                Random
              </button>
            </div>
            <div className="flex space-x-3 items-center mt-5">
              <h5>Difficulty:</h5>
              <button
                type="button"
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                value="easy"
                onClick={onChangeDifficulty}
              >
                Easy
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                value="medium"
                onClick={onChangeDifficulty}
              >
                Medium
              </button>
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                value="hard"
                onClick={onChangeDifficulty}
              >
                Hard
              </button>
            </div>

            {responseCode === 0 && (
              <Link
                className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center mt-12"
                to="/question/1"
                onClick={onBeginClick}
                disabled
              >
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                <span className="relative text-black group-hover:text-white">
                  Click To Begin
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginningScreen;
