export const initialCubeState = {
  cube: {
    0: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    1: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    2: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    3: [3, 3, 3, 3, 3, 3, 3, 3, 3],
    4: [4, 4, 4, 4, 4, 4, 4, 4, 4],
    5: [5, 5, 5, 5, 5, 5, 5, 5, 5],
  },
  currentSide: 0,
  top: 1,
  left: 2,
  bottom: 3,
  right: 4,
  back: 5,
};

export const cubeReducer = (state = initialCubeState, action) => {
  switch (action.type) {
    case "ROTATE_BOTTOM_TO_RIGHT":
      const newCurrentSideRotateBottomToRight = [
        ...state.cube[state.currentSide],
      ].map((item, index) => {
        if (index === 6 || index === 7 || index === 8) {
          return state.cube[state.left][index];
        } else {
          return item;
        }
      });
      const newRightSideRotateBottomToRight = [...state.cube[state.right]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.currentSide][index];
          } else {
            return item;
          }
        }
      );
      const newBackSideRotateBottomToRight = [...state.cube[state.back]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.right][index];
          } else {
            return item;
          }
        }
      );
      const newLeftSideRotateBottomToRight = [...state.cube[state.left]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.back][index];
          } else {
            return item;
          }
        }
      );
      return {
        ...state,
        cube: {
          ...state.cube,
          [state.currentSide]: newCurrentSideRotateBottomToRight,
          [state.right]: newRightSideRotateBottomToRight,
          [state.back]: newBackSideRotateBottomToRight,
          [state.left]: newLeftSideRotateBottomToRight,
        },
      };
    case "ROTATE_BOTTOM_TO_LEFT":
      const newCurrentSideRotateBottomToLeft = [
        ...state.cube[state.currentSide],
      ].map((item, index) => {
        if (index === 6 || index === 7 || index === 8) {
          return state.cube[state.right][index];
        } else {
          return item;
        }
      });
      const newRightSideRotateBottomToLeft = [...state.cube[state.right]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.back][index];
          } else {
            return item;
          }
        }
      );
      const newBackSideRotateBottomToLeft = [...state.cube[state.back]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.left][index];
          } else {
            return item;
          }
        }
      );
      const newLeftSideRotateBottomToLeft = [...state.cube[state.left]].map(
        (item, index) => {
          if (index === 6 || index === 7 || index === 8) {
            return state.cube[state.currentSide][index];
          } else {
            return item;
          }
        }
      );
      return {
        ...state,
        cube: {
          ...state.cube,
          [state.currentSide]: newCurrentSideRotateBottomToLeft,
          [state.right]: newRightSideRotateBottomToLeft,
          [state.back]: newBackSideRotateBottomToLeft,
          [state.left]: newLeftSideRotateBottomToLeft,
        },
      };
    case "VIEW_TOP":
      return {
        ...state,
        currentSide: state.top,
        top: state.back,
        bottom: state.currentSide,
        back: state.bottom,
      };
    case "VIEW_BOTTOM":
      return {
        ...state,
        currentSide: state.bottom,
        top: state.currentSide,
        bottom: state.back,
        back: state.top,
      };
    case "VIEW_LEFT_SIDE":
      return {
        ...state,
        currentSide: state.left,
        back: state.right,
        right: state.currentSide,
        left: state.back,
      };
    case "VIEW_RIGHT_SIDE":
      return {
        ...state,
        left: state.currentSide,
        back: state.left,
        currentSide: state.right,
        right: state.back,
      };
    default:
      return state;
  }
};
