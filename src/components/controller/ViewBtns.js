import React from "react";

const viewButtons = [
  { view: "Front", number: 0 },
  { view: "Back", number: 5 },
  { view: "Left", number: 2 },
  { view: "Right", number: 4 },
  { view: "Top", number: 1 },
  { view: "Bottom", number: 3 },
];
const ViewBtns = ({ cubeDispatch, cubeState }) => {
  return (
    <div className="view-btn-container">
      {/* ********** VIEW BUTTONS ********** */}
      {viewButtons.map(({ view, number }, index) => {
        const active = cubeState.currentSide === number ? `bg-${number}` : "";
        return (
          <button
            key={index}
            type="button"
            className={`view-btn x-${number} ${active}`}
            onClick={() => cubeDispatch({ type: `VIEW_${view.toUpperCase()}` })}
          >
            {view}
          </button>
        );
      })}
    </div>
  );
};

export default ViewBtns;
