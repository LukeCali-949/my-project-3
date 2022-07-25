import React, { useState } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";

const BeginningScreen = () => {
  const [questions, setQuestions] = useState([]);
  const onBeginClick = () => {
    fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  };

  return (
    <>
      <div className="w-full bg-golden-rod h-screen absolute -z-10"></div>
      <div class="flex justify-center items-center text-center  min-h-screen">
        <div class="rounded-lg shadow-lg bg-white max-w-xl h-96">
          <div class="p-6 justify-center">
            <h5 class="text-gray-900 text-xl font-medium mb-2 justify-self-center  font-press-start">
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
                class="max-w-[200px]  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected="">Choose a trivia category</option>
                <option value="general-knowledge">General Knowledge</option>
                <option value="mythology">Mythology</option>
                <option value="sports">Sports</option>
                <option value="art">Art</option>
              </select>
              <h5>or</h5>
              <a
                href="#_"
                class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-300 border border-gray-100 rounded-lg shadow-inner group"
              >
                <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
                <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Random
                </span>
              </a>
            </div>
            <div className="flex space-x-3 items-center mt-5">
              <h5>Difficulty:</h5>
              <button
                type="button"
                class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                Easy
              </button>
              <button
                type="button"
                class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
              >
                Medium
              </button>
              <button
                type="button"
                class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Hard
              </button>
            </div>

            <Link
              className="relative inline-block px-4 py-2 font-medium group cursor-pointer text-center mt-12"
              to="/question1"
              onClick={onBeginClick}
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span className="relative text-black group-hover:text-white">
                Click To Begin
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BeginningScreen;
