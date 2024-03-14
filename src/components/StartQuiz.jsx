import React, { useContext, useEffect, useState } from "react";
import TypingEffect from "./TypingEffect";
import { AnimatePresence, motion } from "framer-motion";
import QuizContext from "../context/quiz-context";

const StartQuiz = () => {
  const [showDescription, setShowDescription] = useState(false);
  const { handleClick, isVisible } = useContext(QuizContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDescription(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="start-container"
          initial={{ scale: 0.6, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <motion.div className="title">
            <TypingEffect text="React Quiz" delay={100} />
          </motion.div>
          {showDescription && (
            <p className="start-description">
              <TypingEffect
                text="Welcome to the React Questionnaire! Answer 10 questions to test your knowledge."
                delay={35}
              />
            </p>
          )}
          <button onClick={handleClick} className="btn start--btn">
            Start Quiz
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StartQuiz;
