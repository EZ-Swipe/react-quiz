import { createContext, useState } from "react";

const QuizContext = createContext({});

export function QuizContextProvider({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <QuizContext.Provider
      value={{
        handleClick,
        isVisible,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export default QuizContext;
