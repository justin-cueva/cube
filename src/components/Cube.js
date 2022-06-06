import React, { Fragment, useEffect, useReducer } from "react";

import ViewButtons from "./ViewButtons";
import MixButtons from "./MixButtons";
import { cubeReducer, initialCubeState } from "../cubeReducer";
import "../styles/cube.css";

const Cube = () => {
  const [cubeState, cubeDispatch] = useReducer(cubeReducer, initialCubeState);

  useEffect(() => {
    console.log(cubeState.cube[cubeState.currentSide]);
  }, []);

  return (
    <div className="cube">
      <ViewButtons cubeDispatch={cubeDispatch} />
      <MixButtons cubeDispatch={cubeDispatch} cubeState={cubeState} />
      <button
        // className="mix-btn"
        style={{ position: "absolute", top: "-5rem" }}
        type="button"
        onClick={() => cubeDispatch({ type: "VIEW_FRONT" })}
      >
        Front
      </button>
      <button
        style={{ position: "absolute", top: "-5rem", right: "0" }}
        // className="mix-btn"
        type="button"
        onClick={() => cubeDispatch({ type: "VIEW_BACK" })}
      >
        Back
      </button>
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
