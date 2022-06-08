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
      <span
        onClick={() => cubeDispatch({ type: "SET_GAME_IS_ON", payload: true })}
      >
        Score: {cubeState.score.toFixed(1)}
      </span>
      <span
        onClick={() => cubeDispatch({ type: "SET_GAME_IS_ON", payload: false })}
      >
        High Score: {(12.9).toFixed(1)}
      </span>
    </div>
  );
};

export default ScoreContainer;
