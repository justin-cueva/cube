import { Fragment } from "react";

const ViewButtons = ({ cubeDispatch }) => {
  return (
    <Fragment>
      <button
        className="spin-btn top"
        type="button"
        onClick={() => {
          cubeDispatch({ type: "VIEW_TOP" });
        }}
      >
        top
      </button>
      <button
        className="spin-btn right"
        type="button"
        onClick={() => {
          cubeDispatch({ type: "VIEW_RIGHT" });
        }}
      >
        right
      </button>
      <button
        className="spin-btn bottom"
        type="button"
        onClick={() => {
          cubeDispatch({ type: "VIEW_BOTTOM" });
        }}
      >
        bottom
      </button>
      <button
        className="spin-btn left"
        type="button"
        onClick={() => {
          cubeDispatch({ type: "VIEW_LEFT" });
        }}
      >
        left
      </button>
    </Fragment>
  );
};

export default ViewButtons;
