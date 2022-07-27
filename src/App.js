import { useContext, useEffect, useState } from "react";
import BeginningScreen from "./ui/BeginningScreen/BeginningScreen";
import HomeScreen from "./ui/HomeScreen/HomeScreen";
import QuestionDisplay from "./ui/QuestionDisplay/QuestionDisplay";
import { Route, Routes, Redirect } from "react-router-dom";
import QuestionContext from "./store/questions-context";
import ResultsDisplay from "./ui/ResultsDisplay/ResultsDisplay";

export default function App() {
  const [questions, setQuestions] = useState([]);

  // useEffect(() => {
  //   fetch(
  //     "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);

  return (
    <Routes>
      <Route path="/" exact element={<HomeScreen />}></Route>
      <Route
        path="/begin"
        exact
        element={<BeginningScreen setQuestions={setQuestions} />}
      ></Route>
      <Route
        path="/question/:questionId"
        element={<QuestionDisplay questions={questions} />}
      ></Route>
      <Route path="/results" element={<ResultsDisplay />}></Route>
    </Routes>
  );
}

// return (
//   <>
//     <div className="container bg-slate-700 w-max">
//       <div
//         id="home"
//         className="flex flex-col justify-center items-center"
//       >
//         <h1>Are you Ready?</h1>
//         <button
//           type="button"
//           className="w-64 text-center mb-4 no-underline text-gray-900 bg-indigo-700 rounded py-3 text-2xl"
//         >
//           Play
//         </button>
//         <button
//           type="button"
//           className="w-64 text-center mb-4 no-underline text-gray-900 bg-indigo-700 rounded py-3 text-2xl"
//         >
//           High Scores
//         </button>
//       </div>
//     </div>
//   </>
// );

/* 

<div>
        <iframe
          src="https://www.scorebat.com/embed/v/b0lLMGRCK21EblRSbjZDVmYyZDJoUT09/?token=MjE3NzlfMTY1ODY0MzY0NF9mNzg3YzNlMTVjNDc1OTRmYjc4NjFjYzIwNDZmYjBlOGI5N2VkMzgy&utm_source=api&utm_medium=video&utm_campaign=apifd"
          frameborder="0"
          width="100%"
          height="100%"
          allowfullscreen
          allow="autoplay; fullscreen"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0px",
            top: "0px",
            overflow: "hidden",
          }}
          // "width:100%;height:100%;position:absolute;left:0px;top:0px;overflow:hidden;"
        ></iframe>
      </div>



*/
