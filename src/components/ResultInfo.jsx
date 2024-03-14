import React from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { motion } from "framer-motion";

const ResultInfo = ({ correct, wrong }) => {
  return (
    <>
      <h1 className="title progress-title">React Quiz</h1>
      <motion.span
        className="complited"
        initial={{ scaleY: 0.1, transformOrigin: "100% 0", opacity: 0 }}
        animate={{ scaleY: 1, transformOrigin: "100% 0", opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.3 }}
      >
        Complited
      </motion.span>

      <div className="result-complited">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.3 }}
          className="result-item is-correct"
        >
          <span className="icon-word">
            <TaskAltIcon /> Correct
          </span>
          <span>{correct}</span>
        </motion.div>
        <motion.div
          className="result-item is-wrong"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.3 }}
        >
          <span className="icon-word">
            <HighlightOffIcon /> Wrong
          </span>
          <span>{wrong}</span>
        </motion.div>
      </div>
      <a href="https://ez-swipe.github.io/react-quiz/">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.3 }}
          className="btn restart--btn"
        >
          Restart Quiz
        </motion.button>
      </a>
    </>
  );
};

export default ResultInfo;
