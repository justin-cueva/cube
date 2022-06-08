import React from "react";

const ScoreContainer = () => {
  return (
    <div className="score-container">
      <span>Score: {(20.3).toFixed(1)}</span>
      <span>High Score: {(12.9).toFixed(1)}</span>
    </div>
  );
};

export default ScoreContainer;
