import { Fragment } from "react";

const MixButtons = ({ cubeDispatch }) => {
  return (
    <Fragment>
      {/* <button
        type="button"
        className="mix-btn mix-btn--top-left"
        onClick={() => cubeDispatch({ type: "", payload: { currentSide: 1 } })}
      >
        mix
      </button>
      <button
        type="button"
        className="mix-btn mix-btn--top-right "
        onClick={() => cubeDispatch({ type: "", payload: { currentSide: 1 } })}
      >
        mix
      </button> */}
      <button
        type="button"
        className="mix-btn mix-btn--bottom-left "
        onClick={() =>
          cubeDispatch({
            type: "ROTATE_BOTTOM_TO_LEFT",
            payload: { button: "LEFT" },
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
            type: "ROTATE_BOTTOM_TO_RIGHT",
            payload: { button: "RIGHT" },
          })
        }
      >
        mix
      </button>
    </Fragment>
  );
};

export default MixButtons;
