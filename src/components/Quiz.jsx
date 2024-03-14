import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Quiz = ({ question, onClickBtn, step }) => {
  const [selectedVariant, setSelectedVariant] = useState();
  const [isChecked, setIsChecked] = useState();

  const controls = useAnimation();

  const clickHandleNext = (selectedVariant) => {
    if (isChecked !== null && isChecked !== undefined) {
      onClickBtn(selectedVariant);
      setIsChecked(null);
      controls.set({ x: 80 });
      controls.start({ x: 0 });
    } else {
      alert("Please select an answer choice.");
    }
  };

  return (
    <>
      <motion.h2
        animate={controls}
        transition={{ duration: 0.35 }}
        className="quiz-inner-title"
      >
        {question.title}
      </motion.h2>
      <ul className="quiz-inner-list">
        {question.variants.map((q, index) => (
          <motion.li
            key={index}
            className={
              isChecked === index
                ? "quiz-inner-item checked"
                : "quiz-inner-item"
            }
            onClick={() => {
              setSelectedVariant(index);
              setIsChecked(index);
            }}
            transition={{ delay: index * 0.09, duration: 0.6 }}
            animate={controls}
          >
            {q}
          </motion.li>
        ))}
      </ul>
      <button
        onClick={() => {
          clickHandleNext(selectedVariant);
        }}
        className="btn game--btn"
      >
        Next Question
      </button>
    </>
  );
};

export default Quiz;
