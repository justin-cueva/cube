import { Fragment } from "react";

const MixButtons = ({ cubeDispatch, cubeState }) => {
  return (
    <Fragment>
      {cubeState.currentSide !== 1 && cubeState.currentSide !== 3 && (
        <Fragment>
          <button
            type="button"
            className="mix-btn mix-btn--top-left"
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
            mix
          </button>
          <button
            type="button"
            className="mix-btn mix-btn--top-right "
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
            mix
          </button>
          <button
            type="button"
            className="mix-btn mix-btn--bottom-left "
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
            mix
          </button>
          <button
            type="button"
            className="mix-btn mix-btn--bottom-right"
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
            mix
          </button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default MixButtons;
