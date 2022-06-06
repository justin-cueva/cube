import React from "react";
import "../../styles/controller/controller.css";

const Controller = () => {
  return (
    <div className="controller-container">
      <h2>Controller</h2>
      <div>x</div>
      <span>Viewing Front</span>
      <button className="view-btn x-0">Front</button>
      <button className="view-btn x-1 ">Back</button>
      <button className="view-btn x-2">Left</button>
      <button className="view-btn x-3">Right</button>
      <button className="view-btn x-4">Top</button>
      <button className="view-btn x-5">Bottom</button>
    </div>
  );
};

export default Controller;
