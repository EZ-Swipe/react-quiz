import React from "react";
import { questions } from "../data";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const ResultList = ({ selectedVariant }) => {
  const getVariantClassName = (
    question,
    selectedVariantIndex,
    variantIndex
  ) => {
    const isCorrect = variantIndex === question.correct;
    const isSelected = selectedVariantIndex === variantIndex;
    if (isSelected) {
      return isCorrect
        ? "quiz-inner-item checked"
        : "quiz-inner-item incorrect";
    } else {
      return isCorrect ? "quiz-inner-item correct" : "quiz-inner-item";
    }
  };

  return (
    <>
      {questions.map((question, index) => (
        <div className="question-box" key={index}>
          <motion.h2
            className="quiz-inner-title"
            initial={{ x: 80 }}
            animate={{ x: 0 }}
            transition={{ delay: index * 0.25, duration: 0.5 }}
          >
            {question.title}
          </motion.h2>
          <motion.ul
            className="quiz-inner-list"
            initial={{ x: 80 }}
            animate={{ x: 0 }}
            transition={{ delay: index * 0.5, duration: 0.5 }}
          >
            {question.variants.map((variant, variantIndex) => (
              <motion.li
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ delay: variantIndex * 0.1, duration: 0.3 }}
                className={getVariantClassName(
                  question,
                  selectedVariant[index],
                  variantIndex
                )}
                key={variantIndex}
              >
                {variant}
                {selectedVariant[index] === variantIndex ? (
                  variantIndex === question.correct ? (
                    <span className="quiz-item__icon">
                      <CheckIcon />
                    </span>
                  ) : (
                    <span className="quiz-item__icon">
                      <CloseIcon />
                    </span>
                  )
                ) : null}
                {selectedVariant[index] !== variantIndex &&
                variantIndex === question.correct ? (
                  <span className="quiz-item__icon">
                    <CheckIcon />
                  </span>
                ) : null}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      ))}
    </>
  );
};

export default ResultList;
