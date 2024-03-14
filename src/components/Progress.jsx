import React from "react";
import { questions } from "../data";

const Progress = ({ step }) => {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <h1 className="title progress-title">React Quiz</h1>
      <div className="progress-bar">
        <div
          style={{ width: `${percentage}%` }}
          className="progress-bar-inner"
        ></div>
      </div>
    </>
  );
};

export default Progress;