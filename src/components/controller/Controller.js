import React, { useState } from "react";

import VerticalArrows from "./VerticalArrows";
import HorizontalArrows from "./HorizontalArrow";
import ViewBtns from "./ViewBtns";
import ShuffleReset from "./ShuffleReset";
import ScoreContainer from "./ScoreContainer";
import "../../styles/controller.css";

const Controller = ({ cubeDispatch, cubeState }) => {
  const [spinBtns, setSpinBtns] = useState([]);

  return (
    <div className="controller-container">
      <ScoreContainer cubeDispatch={cubeDispatch} cubeState={cubeState} />
      <ViewBtns cubeDispatch={cubeDispatch} cubeState={cubeState} />
      <div className="icon-btn-container">
        <ShuffleReset cubeDispatch={cubeDispatch} spinBtns={spinBtns} />
        <HorizontalArrows
          setSpinBtns={setSpinBtns}
          cubeDispatch={cubeDispatch}
          cubeState={cubeState}
        />
        <VerticalArrows
          setSpinBtns={setSpinBtns}
          cubeDispatch={cubeDispatch}
          cubeState={cubeState}
        />
      </div>
    </div>
  );
};

export default Controller;
