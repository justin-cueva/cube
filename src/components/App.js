import React, { useReducer } from "react";
import Cube from "./Cube";
import Controller from "./Controller";

import { cubeReducer, initialCubeState } from "../cubeReducer";

const App = () => {
  const [cubeState, cubeDispatch] = useReducer(cubeReducer, initialCubeState);
  return (
    <div className="app">
      <div
        style={{
          position: "absolute",
          top: "37.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5rem",
        }}
      >
        <Controller cubeDispatch={cubeDispatch} cubeState={cubeState} />
        <Cube cubeDispatch={cubeDispatch} cubeState={cubeState} />
      </div>
    </div>
  );
};

export default App;
