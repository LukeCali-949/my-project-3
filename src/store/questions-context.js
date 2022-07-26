import React, { useState, useEffect } from "react";

const QuestionContext = React.createContext({
  questions: [],
  onGetQuestions: (questions) => {},
});

export const QuestionContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  const questionsChangeHandler = (gotQuestions) => {
    setQuestions(gotQuestions);
  };

  return (
    <QuestionContext.Provider
      value={{
        questions: questions,
        onGetQuestions: questionsChangeHandler,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
};

export default QuestionContext;
