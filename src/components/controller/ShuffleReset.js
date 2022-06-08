import React from "react";
import { GrPowerReset } from "react-icons/gr";
import { ImShuffle } from "react-icons/im";

const ShuffleReset = ({ cubeDispatch, spinBtns }) => {
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
  );
};

export default ShuffleReset;
