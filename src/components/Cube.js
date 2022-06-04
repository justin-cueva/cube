import React, { Fragment, useEffect, useReducer } from "react";

import SpinButtons from "./SpinButtons";
import { cubeReducer, initialCubeState } from "../cubeReducer";

const Cube = () => {
  const [cubeState, cubeDispatch] = useReducer(cubeReducer, initialCubeState);

  useEffect(() => {
    console.log(cubeState.cube[cubeState.currentSide]);
  }, []);

  return (
    <div className="cube">
      <SpinButtons cubeDispatch={cubeDispatch} />
      Cube<span style={{ fontSize: "3rem" }}>{cubeState.currentSide}</span>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          rowGap: "4rem",
        }}
      >
        {cubeState.cube[cubeState.currentSide].map((num, index) => {
          return <div key={index}>{num}</div>;
        })}
      </div>
    </div>
  );
};

export default Cube;
