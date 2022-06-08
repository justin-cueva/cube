import React, { useEffect } from "react";

const ScoreContainer = ({ cubeDispatch, cubeState }) => {
  useEffect(() => {
    if (!cubeState.gameIsOn) return;
    setTimeout(() => {
      cubeDispatch({ type: "ADD_TO_SCORE" });
    }, 100);
  }, [cubeState.score, cubeState.gameIsOn]);

  return (
    <div className="score-container">
      <span>Score: {cubeState.score.toFixed(1)}</span>
      <span>High Score: {cubeState.highScore.toFixed(1)}</span>
    </div>
  );
};

export default ScoreContainer;
