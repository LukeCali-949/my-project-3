import React, { useContext, useEffect, useState } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import QuestionContext from "../../store/questions-context";

const BeginningScreen = (props) => {
  // const ctx = useContext(QuestionContext);

  const [category, setCategory] = useState("Not Selected");
  const [difficulty, setDifficulty] = useState("Not Selected");
  const [responseCode, setResponseCode] = useState("");

  useEffect(() => {
    if (category !== "Not Selected" && difficulty !== "Not Selected") {
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
          "vehicles",
          "entertainment-comics",
          "gadgets",
          "anime-manga",
          "cartoons-animation",
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
    // console.log("hey");
    // fetch(
    //   "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    // )
    //   .then((res) => res.json())
    //   .then((data) => ctx.onGetQuestions(data.results));
  };
  //w-full
  //  h-screen absolute -z-10
  return (
    <>
      <div className=" bg-[#0d1137] phone:h-[1300px] phone:w-max phone:px-11">
        <div className="flex justify-center items-center text-center  min-h-screen font-press-start">
          <div className="rounded-lg shadow-lg bg-white max-w-xl h-[450px] phone:h-max phone:max-w-[300px]">
            <div className="p-6 justify-center">
              <h5 className="text-gray-900 text-xl font-medium mb-2 justify-self-center  font-press-start">
                Please Pick Your Configurations
              </h5>
              {/* <p class="text-gray-700 text-base mb-4 text-left">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> */}

              <div className="flex space-x-3 items-center mt-5 phone:flex-col phone:space-y-5">
                <h5 className="">Category:</h5>
                <select
                  id="countries"
                  className="max-w-[200px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={onChangeCategory}
                  value={category}
                >
                  <option selected="">Choose category</option>
                  <option value="sports">Sports</option>
                  <option value="general-knowledge">General Knowledge</option>
                  <option value="mythology">Mythology</option>
                  <option value="entertainment-film">
                    Entertainment: Films
                  </option>
                  <option value="entertainment-music">
                    Entertainment: Music
                  </option>
                  <option value="entertainment-musicals-theatres">
                    Entertainment: Musicals & Theatres
                  </option>
                  <option value="entertainment-video-games">
                    Entertainment: Video Games
                  </option>
                  <option value="entertainment-board-games">
                    Entertainment: Board Games
                  </option>
                  <option value="entertainment-comics">
                    Entertainment: Comics
                  </option>
                  <option value="science-nature">
                    Nature and the Wilderness
                  </option>
                  <option value="computers">Computer Science</option>
                  <option value="mathmatics">Mathmatics</option>
                  <option value="geography">Geography</option>
                  <option value="history">History</option>
                  <option value="politics">Politics</option>
                  <option value="celebrites">Celebrites</option>
                  <option value="animals">Animals</option>
                  <option value="vehicles">Vehicles</option>
                  <option value="anime-manga">Anime & Manga</option>
                  <option value="cartoons-animation">
                    Cartoons & Animation
                  </option>
                </select>
                <h5>or</h5>
                <button
                  type="button"
                  class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-2.5"
                  value="random"
                  onClick={onChangeCategory}
                >
                  Random
                </button>
              </div>
              <div className="flex space-x-3 items-center mt-5  phone:flex-col phone:space-y-5">
                <h5 className="">Difficulty:</h5>

                <button
                  type="button"
                  className="focus:outline-none  text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  value="easy"
                  onClick={onChangeDifficulty}
                >
                  Easy
                </button>
                <button
                  type="button"
                  className="focus:outline-none  phone:left-[200px] text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                  value="medium"
                  onClick={onChangeDifficulty}
                >
                  Medium
                </button>
                <button
                  type="button"
                  className="focus:outline-none  phone:left-[350px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  value="hard"
                  onClick={onChangeDifficulty}
                >
                  Hard
                </button>
              </div>
              <h1
                className={`text-left  mt-5 ${
                  category !== "Not Selected"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >{`Chosen Category: ${category} `}</h1>
              <h1
                className={`text-left  mt-5 ${
                  difficulty !== "Not Selected"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >{`Chosen Difficulty: ${difficulty} `}</h1>

              {(responseCode === 0 && (
                <Link
                  className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center mt-12 "
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
              )) || (
                <h1 className="text-center mt-12 font-medium">
                  One moment please...
                </h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginningScreen;
