import React, { useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { ImShuffle } from "react-icons/im";

import VerticalArrows from "./VerticalArrows";
import HorizontalArrows from "./HorizontalArrow";
import ViewBtns from "./ViewBtns";
import "../../styles/controller.css";

const Controller = ({ cubeDispatch, cubeState }) => {
  const [spinBtns, setSpinBtns] = useState([]);

  const viewingTopOrBottom =
    cubeState.currentSide === 1 || cubeState.currentSide === 3;
  const viewingTopOrBottomClass = viewingTopOrBottom
    ? "cursor-not-allowed opacity-15"
    : "cursor-pointer";

  const viewingFrontBottomOrTop =
    cubeState.currentSide === 0 ||
    cubeState.currentSide === 1 ||
    cubeState.currentSide === 3;

  const viewingFrontBottomOrTopClass = viewingFrontBottomOrTop
    ? "cursor-pointer"
    : "cursor-not-allowed opacity-15";

  const shuffleCube = () => {
    cubeDispatch({ type: "VIEW_FRONT" });
    cubeDispatch({ type: "RESET" });
    const allSpinActions = spinBtns.map(
      ({ colSpun, rowSpun, directionSpun, toBeSwappedOut }) => {
        if (colSpun)
          return {
            type: `SPIN_${directionSpun}`,
            payload: { colSpun, directionSpun, toBeSwappedOut },
          };
        if (rowSpun)
          return {
            type: `SPIN_${directionSpun}`,
            payload: { rowSpun, directionSpun, toBeSwappedOut },
          };
      }
    );

    [1, 2, 3, 4].forEach(() => {
      const randomNumber = Math.floor(Math.random() * 8);
      cubeDispatch(allSpinActions[randomNumber]);
    });
  };

  return (
    <div className="controller-container">
      <div className="score-container">
        <span>Score: {(20.3).toFixed(1)}</span>
        <span>High Score: {(12.9).toFixed(1)}</span>
      </div>
      <ViewBtns cubeDispatch={cubeDispatch} cubeState={cubeState} />
      <div className="icon-btn-container">
        <div>
          <span
            className="btn-reset cursor-pointer"
            onClick={() => cubeDispatch({ type: "RESET" })}
          >
            <GrPowerReset />
          </span>
          <span className="btn-shuffle cursor-pointer" onClick={shuffleCube}>
            <ImShuffle />
          </span>
        </div>
        <HorizontalArrows
          setSpinBtns={setSpinBtns}
          viewingTopOrBottomClass={viewingTopOrBottomClass}
          viewingTopOrBottom={viewingTopOrBottom}
          cubeDispatch={cubeDispatch}
        />
        <VerticalArrows
          setSpinBtns={setSpinBtns}
          viewingFrontBottomOrTopClass={viewingFrontBottomOrTopClass}
          viewingFrontBottomOrTop={viewingFrontBottomOrTop}
          cubeDispatch={cubeDispatch}
        />
      </div>
    </div>
  );
};

export default Controller;
