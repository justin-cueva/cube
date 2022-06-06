import React from "react";
import "../../styles/controller/controller.css";

const Controller = ({ cubeDispatch }) => {
  return (
    <div className="controller-container">
      <h2>Controller</h2>
      <div>x</div>
      <span>Viewing Front</span>
      <button
        type="button"
        className="view-btn x-0"
        onClick={() => cubeDispatch({ type: "VIEW_FRONT" })}
      >
        Front
      </button>
      <button
        type="button"
        className="view-btn x-5 "
        onClick={() => cubeDispatch({ type: "VIEW_BACK" })}
      >
        Back
      </button>
      <button
        type="button"
        className="view-btn x-2"
        onClick={() => cubeDispatch({ type: "VIEW_LEFT" })}
      >
        Left
      </button>
      <button
        type="button"
        className="view-btn x-4"
        onClick={() => cubeDispatch({ type: "VIEW_RIGHT" })}
      >
        Right
      </button>
      <button
        type="button"
        className="view-btn x-1"
        onClick={() => cubeDispatch({ type: "VIEW_TOP" })}
      >
        Top
      </button>
      <button
        type="button"
        className="view-btn x-3"
        onClick={() => cubeDispatch({ type: "VIEW_BOTTOM" })}
      >
        Bottom
      </button>
    </div>
  );
};

export default Controller;
