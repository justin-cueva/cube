import React, { Fragment, useReducer } from "react";

import SpinButtons from "./SpinButtons";
import { cubeReducer, initialCubeState } from "../cubeReducer";

const Cube = () => {
  const [cubeState, cubeDispatch] = useReducer(cubeReducer, initialCubeState);

  return (
    <div className="cube">
      <SpinButtons />
      Cube{cubeState.currentSide}
    </div>
  );
};

export default Cube;
