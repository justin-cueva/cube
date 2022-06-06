import React from "react";
import "../../styles/controller/controller.css";

const Controller = () => {
  return (
    <div className="controller-container">
      <h2>Controller</h2>
      <div>x</div>
      <span>Viewing Front</span>
      <button>Front</button>
      <button>Back</button>
      <button>Left</button>
      <button>Right</button>
      <button>Top</button>
      <button>Bottom</button>
    </div>
  );
};

export default Controller;
