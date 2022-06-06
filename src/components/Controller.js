import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";
import "../styles/controller.css";

const buttons = [
  { view: "Front", number: 0 },
  { view: "Back", number: 5 },
  { view: "Left", number: 2 },
  { view: "Right", number: 4 },
  { view: "Top", number: 1 },
  { view: "Bottom", number: 3 },
];

const Controller = ({ cubeDispatch, cubeState }) => {
  return (
    <div className="controller-container">
      <h2 style={{ fontSize: "2rem" }}>Controller</h2>
      {buttons.map(({ view, number }, index) => {
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
          <span
            className="btn-arrow"
            onClick={() =>
              cubeDispatch({
                type: "SPIN_LEFT",
                payload: {
                  toBeSwappedOut: [0, 1, 2],
                  rowSpun: "TOP",
                  directionSpun: "LEFT",
                },
              })
            }
          >
            <FaArrowLeft />
          </span>
          <span
            className="btn-arrow"
            onClick={() =>
              cubeDispatch({
                type: "SPIN_RIGHT",
                payload: {
                  toBeSwappedOut: [0, 1, 2],
                  rowSpun: "TOP",
                  directionSpun: "RIGHT",
                },
              })
            }
          >
            <FaArrowRight />
          </span>
          <span
            className="btn-arrow"
            onClick={() =>
              cubeDispatch({
                type: "SPIN_LEFT",
                payload: {
                  toBeSwappedOut: [6, 7, 8],
                  rowSpun: "BOTTOM",
                  directionSpun: "LEFT",
                },
              })
            }
          >
            <FaArrowLeft />
          </span>
          <span
            className="btn-arrow"
            onClick={() =>
              cubeDispatch({
                type: "SPIN_RIGHT",
                payload: {
                  toBeSwappedOut: [6, 7, 8],
                  rowSpun: "BOTTOM",
                  directionSpun: "RIGHT",
                },
              })
            }
          >
            <FaArrowRight />
          </span>
        </div>
        <div className="vertical-spins spin-buttons">
          <span className="btn-arrow">
            <FaArrowUp />
          </span>
          <span className="btn-arrow">
            <FaArrowUp />
          </span>
          <span className="btn-arrow">
            <FaArrowDown />
          </span>
          <span className="btn-arrow">
            <FaArrowDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Controller;
