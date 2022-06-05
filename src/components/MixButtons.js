import { Fragment } from "react";

const MixButtons = ({ cubeDispatch }) => {
  return (
    <Fragment>
      <button
        type="button"
        className="mix-btn mix-btn--top-left"
        onClick={() =>
          cubeDispatch({
            type: "SPIN_LEFT",
            payload: { toBeSwappedOut: [0, 1, 2] },
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
            payload: { toBeSwappedOut: [0, 1, 2] },
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
            payload: { toBeSwappedOut: [6, 7, 8] },
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
            payload: { toBeSwappedOut: [6, 7, 8] },
          })
        }
      >
        mix
      </button>
    </Fragment>
  );
};

export default MixButtons;
