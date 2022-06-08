import React, { useEffect } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaArrowDown,
  FaArrowUp,
} from "react-icons/fa";

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

const HorizontalArrows = ({ cubeState, cubeDispatch, setSpinBtns }) => {
  const viewingTopOrBottom =
    cubeState.currentSide === 1 || cubeState.currentSide === 3;
  const viewingTopOrBottomClass = viewingTopOrBottom
    ? "cursor-not-allowed opacity-15"
    : "cursor-pointer";

  useEffect(() => {
    setSpinBtns((prevState) => {
      return [...prevState, ...horizontalButtons];
    });
  }, []);

  return (
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
    </div>
  );
};

export default HorizontalArrows;
