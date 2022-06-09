import React, { useEffect } from "react";

import { initialCubeState } from "../../cubeReducer";

const ScoreContainer = ({ cubeDispatch, cubeState }) => {
  useEffect(() => {
    if (!cubeState.gameIsOn) return;
    setTimeout(() => {
      cubeDispatch({ type: "ADD_TO_SCORE" });
    }, 100);
  }, [cubeState.score, cubeState.gameIsOn]);

  useEffect(() => {
    if (!cubeState.gameIsOn) return;
    let cubeIsSolved = true;
    Object.values(cubeState.cube).forEach((arr, indexArr) => {
      arr.forEach((num, index) => {
        if (num !== indexArr) cubeIsSolved = false;
        if (indexArr === 5 && cubeIsSolved && index === 8) {
          cubeDispatch({ type: "SOLVED_CUBE" });
          setTimeout(() => {
            cubeDispatch({ type: "RESET_SCORE" });
          }, 102);
        }
      });
    });
  }, [cubeState.cube]);

  const formatScore = (score) => {
    if (score < 10) return `0${score.toFixed(1)}`;
    if (score < 60) return `${score.toFixed(1)}`;

    const secondsFormatted =
      score % 60 < 10 ? `0${(score % 60).toFixed(1)}` : (score % 60).toFixed(1);

    return `${Math.floor(score / 60)}:${secondsFormatted}`;
  };

  return (
    <div className="score-container">
      <span>Score {formatScore(cubeState.score)}</span>
      {/* <span>Score: {cubeState.score.toFixed(1)}</span> */}
      <span>
        High Score{" "}
        {cubeState.highScore ? formatScore(cubeState.highScore) : "N/A"}
      </span>
    </div>
  );
};

export default ScoreContainer;
