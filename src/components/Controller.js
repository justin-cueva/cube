import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
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
    rowSpun: "LEFT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowUp />,
    directionSpun: "UP",
    rowSpun: "RIGHT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowDown />,
    directionSpun: "DOWN",
    rowSpun: "LEFT",
    toBeSwappedOut: [],
  },
  {
    icon: <FaArrowDown />,
    directionSpun: "DOWN",
    rowSpun: "RIGHT",
    toBeSwappedOut: [],
  },
];

const Controller = ({ cubeDispatch, cubeState }) => {
  const viewingTopOrBottom =
    cubeState.currentSide === 1 || cubeState.currentSide === 3;
  const viewingTopOrBottomClass = viewingTopOrBottom
    ? "cursor-not-allowed opacity-15"
    : "cursor-pointer";

  const notViewingFront = cubeState.currentSide !== 0;
  const notViewingFrontClass = notViewingFront
    ? "cursor-not-allowed opacity-15"
    : "cursor-pointer";

  return (
    <div className="controller-container">
      <h2 style={{ fontSize: "2rem" }}>Controller</h2>
      {viewButtons.map(({ view, number }, index) => {
        const active = cubeState.currentSide === number ? `bg-${number}` : "";
        return (
          <button
            key={index}
            type="button"
            className={`view-btn x-${number} ${active}`}
            onClick={() => cubeDispatch({ type: `VIEW_${view.toUpperCase()}` })}
          >
            {view}
          </button>
        );
      })}
      <div className="spin-buttons">
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

          {/* ********** VERTICAL ARROWS BELOW ********** */}
        </div>
        <div className="vertical-spins spin-buttons">
          {verticalButtons.map(
            ({ icon, directionSpun, rowSpun, toBeSwappedOut }, index) => {
              return (
                <span
                  key={index}
                  className={`btn-arrow ${notViewingFrontClass} ${
                    index !== 0 &&
                    index !== 1 &&
                    "cursor-not-allowed opacity-15"
                  }`}
                  onClick={() => {
                    if (notViewingFront) return;
                    cubeDispatch({
                      type: `SPIN_${directionSpun}`,
                      payload: { toBeSwappedOut, rowSpun, directionSpun },
                    });
                  }}
                >
                  {icon}
                </span>
              );
            }
          )}
          {/* <span
            className={`btn-arrow ${notViewingFrontClass}`}
            onClick={() => {
              if (notViewingFront) return;
              cubeDispatch({
                type: "SPIN_UP",
                payload: {
                  toBeSwappedOut: [],
                  rowSpun: "LEFT",
                  directionSpun: "UP",
                },
              });
            }}
          >
            <FaArrowUp />
          </span>
          <span className="btn-arrow cursor-not-allowed">
            <FaArrowUp />
          </span>
          <span className="btn-arrow cursor-not-allowed">
            <FaArrowDown />
          </span>
          <span className="btn-arrow cursor-not-allowed">
            <FaArrowDown />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Controller;
