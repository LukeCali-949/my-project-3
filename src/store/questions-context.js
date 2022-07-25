import React, { useState, useEffect } from "react";

const QuestionContext = React.createContext({
  questions: [],
});

export const QuestionContextProvider = (props) => {
  const [questions, setQuestions] = useState([]);

  return (
    <AuthContext.Provider
      value={{
        questions: questions,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
