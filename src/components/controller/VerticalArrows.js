import React, { useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

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

const VerticalArrows = ({ cubeDispatch, setSpinBtns, cubeState }) => {
  const viewingFrontBottomOrTop =
    cubeState.currentSide === 0 ||
    cubeState.currentSide === 1 ||
    cubeState.currentSide === 3;

  const viewingFrontBottomOrTopClass = viewingFrontBottomOrTop
    ? "cursor-pointer"
    : "cursor-not-allowed opacity-15";

  useEffect(
    () =>
      setSpinBtns((prevState) => {
        return [...prevState, ...verticalButtons];
      }),
    []
  );
  return (
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
  );
};

export default VerticalArrows;
