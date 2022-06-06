import React, { Fragment, useEffect, useReducer } from "react";

import MixButtons from "./MixButtons";
import "../styles/cube.css";

const Cube = ({ cubeDispatch, cubeState }) => {
  return (
    <div className="cube">
      <MixButtons cubeDispatch={cubeDispatch} cubeState={cubeState} />

      {/* Cube
      <span
        style={{ fontSize: "3rem" }}
        onClick={() => console.log(cubeState.cube)}
      >
        {cubeState.currentSide}
      </span> */}

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
