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
          console.log("solved");
          cubeDispatch({ type: "SOLVED_CUBE" });
        }
      });
    });
    console.log(cubeIsSolved);
  }, [cubeState.cube]);

  useEffect(() => {
    if (cubeState.cubeIsSolved) console.log("success");
  }, [cubeState.cubeIsSolved]);

  return (
    <div className="score-container">
      <span>Score: {cubeState.score.toFixed(1)}</span>
      <span>High Score: {cubeState.highScore.toFixed(1)}</span>
    </div>
  );
};

export default ScoreContainer;
