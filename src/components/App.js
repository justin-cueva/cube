import React, { useReducer } from "react";
import Cube from "./Cube";
import Controller from "./Controller";

import { cubeReducer, initialCubeState } from "../cubeReducer";

const App = () => {
  const [cubeState, cubeDispatch] = useReducer(cubeReducer, initialCubeState);
  return (
    <div className="app">
      <div className="controller-and-cube-container">
        <Controller cubeDispatch={cubeDispatch} cubeState={cubeState} />
        <Cube cubeDispatch={cubeDispatch} cubeState={cubeState} />
      </div>
    </div>
  );
};

export default App;
