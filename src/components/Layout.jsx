import React, { useContext, useState } from "react";
import { questions } from "../data";
import Progress from "./Progress";
import Quiz from "./Quiz";
import ResultInfo from "./ResultInfo";
import ResultList from "./ResultList";
import { motion } from "framer-motion";
import QuizContext from "../context/quiz-context";

const Layout = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);

  const [selectedVariant, setSelectedVariant] = useState(
    Array.from({ length: questions.length }, () => null)
  );

  const { isVisible } = useContext(QuizContext);

  const question = questions[step];
  const onClickBtn = (index) => {
    setStep(step + 1);

    const updatedSelectedVariant = [...selectedVariant];
    updatedSelectedVariant[step] = index;
    setSelectedVariant(updatedSelectedVariant);

    if (index === question.correct) {
      setCorrect(correct + 1);
    } else {
      setWrong(wrong + 1);
    }
  };
  return (
    !isVisible && (
      <motion.div
        className="layout"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.05 }}
      >
        {step !== questions.length ? (
          <>
            <div className="progress-inner">
              <Progress step={step} />
            </div>
            <div className="quiz-inner">
              <Quiz step={step} question={question} onClickBtn={onClickBtn} />
            </div>
          </>
        ) : (
          <>
            <div className="progress-inner">
              <ResultInfo correct={correct} wrong={wrong} />
            </div>
            <div className="quiz-inner">
              <ResultList selectedVariant={selectedVariant} />
            </div>
          </>
        )}
      </motion.div>
    )
  );
};

export default Layout;
