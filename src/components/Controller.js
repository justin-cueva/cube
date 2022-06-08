import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { ImShuffle } from "react-icons/im";
import "../styles/controller.css";

const viewButtons = [
  { view: "Front", number: 0 },
  { view: "Back", number: 5 },
  { view: "Left", number: 2 },
  { view: "Right", number: 4 },
  { view: "Top", number: 1 },
  { view: "Bottom", number: 3 },
];

const horizontalButtons = [
  {
    icon: <FaArrowLeft />,
    directionSpun: "LEFT",
    rowSpun: "TOP",
    toBeSwappedOut: [0, 1, 2],
  },
  {
    icon: <FaArrowRight />,
    directionSpun: "RIGHT",
    rowSpun: "TOP",
    toBeSwappedOut: [0, 1, 2],
  },
  {
    icon: <FaArrowLeft />,
    directionSpun: "LEFT",
    rowSpun: "BOTTOM",
    toBeSwappedOut: [6, 7, 8],
  },
  {
    icon: <FaArrowRight />,
    directionSpun: "RIGHT",
    rowSpun: "BOTTOM",
    toBeSwappedOut: [6, 7, 8],
  },
];

const verticalButtons = [
  {
    icon: <FaArrowUp />,
    directionSpun: "UP",
    colSpun: "LEFT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowUp />,
    directionSpun: "UP",
    colSpun: "RIGHT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowDown />,
    directionSpun: "DOWN",
    colSpun: "LEFT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowDown />,
    directionSpun: "DOWN",
    colSpun: "RIGHT",
    toBeSwappedOut: [],
  },
];

const Controller = ({ cubeDispatch, cubeState }) => {
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
    const allSpinActions = [...horizontalButtons, ...verticalButtons].map(
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
      <h2>Controller</h2>
      <div>
        {/* ********** VIEW BUTTONS ********** */}
        {viewButtons.map(({ view, number }, index) => {
          const active = cubeState.currentSide === number ? `bg-${number}` : "";
          return (
            <button
              key={index}
              type="button"
              className={`view-btn x-${number} ${active}`}
              onClick={() =>
                cubeDispatch({ type: `VIEW_${view.toUpperCase()}` })
              }
            >
              {view}
            </button>
          );
        })}
      </div>
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
        {/* ********** HORIZONTAL ARROWS ********** */}
        <div className="horizontal-spins spin-buttons">
          {horizontalButtons.map(
            ({ icon, directionSpun, rowSpun, toBeSwappedOut }, index) => {
              return (
                <span
                  key={index}
                  className={`btn-arrow ${viewingTopOrBottomClass}`}
                  onClick={() => {
                    if (viewingTopOrBottom) return;
                    cubeDispatch({
                      type: `SPIN_${directionSpun}`,
                      payload: {
                        toBeSwappedOut,
                        rowSpun,
                        directionSpun,
                      },
                    });
                  }}
                >
                  {icon}
                </span>
              );
            }
          )}

          {/* ********** VERTICAL ARROWS ********** */}
        </div>
        <div className="vertical-spins spin-buttons">
          {verticalButtons.map(
            ({ icon, directionSpun, colSpun, toBeSwappedOut }, index) => {
              return (
                <span
                  key={index}
                  className={`btn-arrow ${viewingFrontBottomOrTopClass} ${
                    index === 4 && "cursor-not-allowed opacity-15"
                  }`}
                  onClick={() => {
                    if (!viewingFrontBottomOrTop) return;
                    cubeDispatch({
                      type: `SPIN_${directionSpun}`,
                      payload: { toBeSwappedOut, colSpun, directionSpun },
                    });
                  }}
                >
                  {icon}
                </span>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Controller;
