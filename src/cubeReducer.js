export const initialCubeState = {
  cube: {
    0: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    1: [1, 1, 1, 1, 1, 1, 1, 1, 1],
    2: [2, 2, 2, 2, 2, 2, 2, 2, 2],
    3: [0, 0, 0, 3, 3, 3, 3, 3, 3],
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
    case "SPIN_LEFT":
      const newCurrentSideRotateTopOrBottomToLeft = [
        ...state.cube[state.currentSide],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.right][index];
        } else {
          return item;
        }
      });
      const newRightSideRotateTopOrBottomToLeft = [
        ...state.cube[state.right],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.back][index];
        } else {
          return item;
        }
      });
      const newBackSideRotateTopOrBottomToLeft = [
        ...state.cube[state.back],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.left][index];
        } else {
          return item;
        }
      });
      const newLeftSideRotateTopOrBottomToLeft = [
        ...state.cube[state.left],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.currentSide][index];
        } else {
          return item;
        }
      });

      const bottomCol1 = [...state.cube[state.bottom]].filter((item, index) => {
        if (index === 0 || index === 3 || index === 6) return true;
        else return false;
      });
      const bottomCol2 = [...state.cube[state.bottom]].filter((item, index) => {
        if (index === 1 || index === 4 || index === 7) return true;
        else return false;
      });
      const bottomCol3 = [...state.cube[state.bottom]].filter((item, index) => {
        if (index === 2 || index === 5 || index === 8) return true;
        else return false;
      });
      const topCol1 = [...state.cube[state.top]].filter((item, index) => {
        if (index === 0 || index === 3 || index === 6) return true;
        else return false;
      });
      const topCol2 = [...state.cube[state.top]].filter((item, index) => {
        if (index === 1 || index === 4 || index === 7) return true;
        else return false;
      });
      const topCol3 = [...state.cube[state.top]].filter((item, index) => {
        if (index === 2 || index === 5 || index === 8) return true;
        else return false;
      });
      const newSpunBottom = (rowSpun) => {
        if (rowSpun === "TOP") return state.cube[state.bottom];
        else {
          return [...bottomCol3, ...bottomCol2, ...bottomCol1];
        }
      };
      const newSpunTop = (rowSpun) => {
        if (rowSpun === "BOTTOM") return state.cube[state.top];
        else {
          return [
            ...topCol1.reverse(),
            ...topCol2.reverse(),
            ...topCol3.reverse(),
          ];
        }
      };

      return {
        ...state,
        cube: {
          ...state.cube,
          [state.currentSide]: newCurrentSideRotateTopOrBottomToLeft,
          [state.right]: newRightSideRotateTopOrBottomToLeft,
          [state.back]: newBackSideRotateTopOrBottomToLeft,
          [state.left]: newLeftSideRotateTopOrBottomToLeft,
          [state.bottom]: newSpunBottom(action.payload.rowSpun),
          [state.top]: newSpunTop(action.payload.rowSpun),
        },
      };
    case "SPIN_RIGHT":
      const newCurrentSideRotateTopOrBottomToRight = [
        ...state.cube[state.currentSide],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.left][index];
        } else {
          return item;
        }
      });
      const newRightSideRotateTopOrBottomToRight = [
        ...state.cube[state.right],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.currentSide][index];
        } else {
          return item;
        }
      });
      const newBackSideRotateTopOrBottomToRight = [
        ...state.cube[state.back],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.right][index];
        } else {
          return item;
        }
      });
      const newLeftSideRotateTopOrBottomToRight = [
        ...state.cube[state.left],
      ].map((item, index) => {
        if (
          index === action.payload.toBeSwappedOut[0] ||
          index === action.payload.toBeSwappedOut[1] ||
          index === action.payload.toBeSwappedOut[2]
        ) {
          return state.cube[state.back][index];
        } else {
          return item;
        }
      });
      return {
        ...state,
        cube: {
          ...state.cube,
          [state.currentSide]: newCurrentSideRotateTopOrBottomToRight,
          [state.right]: newRightSideRotateTopOrBottomToRight,
          [state.back]: newBackSideRotateTopOrBottomToRight,
          [state.left]: newLeftSideRotateTopOrBottomToRight,
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
