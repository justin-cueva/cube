import React from "react";

import "../styles/cube.css";

const Cube = ({ cubeState }) => {
  return (
    <div className="cube">
      {cubeState.cube[cubeState.currentSide].map((num, index) => {
        return (
          <div
            className={`bg-${num} single-cube`}
            style={{
              zIndex: "10",
              display: "block",
              fontSize: "1.8rem",
            }}
            key={index}
          >
            <span className="cube-number">{num}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Cube;
