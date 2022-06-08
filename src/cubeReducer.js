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
  const rightCol1 = [...state.cube[state.right]].filter((_, index) => {
    if (index === 0 || index === 3 || index === 6) return true;
    else return false;
  });
  const rightCol2 = [...state.cube[state.right]].filter((_, index) => {
    if (index === 1 || index === 4 || index === 7) return true;
    else return false;
  });
  const rightCol3 = [...state.cube[state.right]].filter((_, index) => {
    if (index === 2 || index === 5 || index === 8) return true;
    else return false;
  });
  const leftCol1 = [...state.cube[state.left]].filter((item, index) => {
    if (index === 0 || index === 3 || index === 6) return true;
    else return false;
  });
  const leftCol2 = [...state.cube[state.left]].filter((item, index) => {
    if (index === 1 || index === 4 || index === 7) return true;
    else return false;
  });
  const leftCol3 = [...state.cube[state.left]].filter((item, index) => {
    if (index === 2 || index === 5 || index === 8) return true;
    else return false;
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
  const backCol1 = [...state.cube[state.back]].filter((number, index) => {
    if (index === 0 || index === 3 || index === 6) return true;
    else return false;
  });
  const backCol3 = [...state.cube[state.back]].filter((number, index) => {
    if (index === 2 || index === 5 || index === 8) return true;
    else return false;
  });
  const newSpunBottom = (rowSpun, directionSpun) => {
    if (rowSpun === "TOP") return state.cube[state.bottom];
    if (directionSpun === "LEFT") {
      return [...bottomCol3, ...bottomCol2, ...bottomCol1];
    }
    if (directionSpun === "RIGHT")
      return [
        ...bottomCol1.reverse(),
        ...bottomCol2.reverse(),
        ...bottomCol3.reverse(),
      ];
  };
  const newSpunTop = (rowSpun, directionSpun) => {
    if (rowSpun === "BOTTOM") return state.cube[state.top];
    if (directionSpun === "LEFT") {
      return [...topCol1.reverse(), ...topCol2.reverse(), ...topCol3.reverse()];
    }
    if (directionSpun === "RIGHT") return [...topCol3, ...topCol2, ...topCol1];
  };
  const getColOfSide = (side, col) => {
    return [...state.cube[side]].filter((_, index) => {
      if (col === 1) {
        if (index === 0 || index === 3 || index === 6) return true;
      } else if (col === 2) {
        if (index === 1 || index === 4 || index === 7) return true;
      } else if (col === 3) {
        if (index === 2 || index === 5 || index === 8) return true;
      } else {
        return false;
      }
    });
  };
  switch (action.type) {
    case "SPIN_DOWN":
      // COL_SPUN
      if (action.payload.colSpun === "LEFT") {
        const newCurrentSideRotateLeftDown = state.cube[0].map(
          (number, index) => {
            if (index === 0 || index === 3 || index === 6)
              return state.cube[1][index];
            else return number;
          }
        );
        const newTopSideRotateLeftDown = state.cube[1].map((number, index) => {
          const backReversed = getColOfSide(5, 3).reverse();
          if (index === 0) return backReversed[0];
          else if (index === 3) return backReversed[1];
          else if (index === 6) return backReversed[2];
          else return number;
        });
        const newBackSideRotateLeftDown = state.cube[5].map((number, index) => {
          const topReversed = getColOfSide(3, 1).reverse();

          if (index === 2) return topReversed[0];
          else if (index === 5) return topReversed[1];
          else if (index === 8) return topReversed[2];
          else return number;
        });
        const newBottomSideRotateLeftDown = state.cube[3].map(
          (number, index) => {
            if (index === 0 || index === 3 || index === 6)
              return state.cube[0][index];
            else return number;
          }
        );
        const newLeftSideRotateLeftDown = [
          ...leftCol1.reverse(),
          ...leftCol2.reverse(),
          ...leftCol3.reverse(),
        ];
        return {
          ...state,
          cube: {
            ...state.cube,
            0: newCurrentSideRotateLeftDown,
            1: newTopSideRotateLeftDown,
            5: newBackSideRotateLeftDown,
            3: newBottomSideRotateLeftDown,
            2: newLeftSideRotateLeftDown,
          },
        };
      }
      // COL_SPUN
      if (action.payload.colSpun === "RIGHT") {
        const newCurrentSideRotateLeftDown = state.cube[0].map(
          (number, index) => {
            if (index === 2 || index === 5 || index === 8)
              return state.cube[1][index];
            else return number;
          }
        );
        const newTopSideRotateLeftDown = state.cube[1].map((number, index) => {
          const backReversed = getColOfSide(5, 1).reverse();
          if (index === 2) return backReversed[0];
          else if (index === 5) return backReversed[1];
          else if (index === 8) return backReversed[2];
          else return number;
        });
        const newBackSideRotateLeftDown = state.cube[5].map((number, index) => {
          const topReversed = getColOfSide(3, 3).reverse();

          if (index === 0) return topReversed[0];
          else if (index === 3) return topReversed[1];
          else if (index === 6) return topReversed[2];
          else return number;
        });
        const newBottomSideRotateLeftDown = state.cube[3].map(
          (number, index) => {
            if (index === 2 || index === 5 || index === 8)
              return state.cube[0][index];
            else return number;
          }
        );
        const newLeftSideRotateLeftDown = [
          ...rightCol3,
          ...rightCol2,
          ...rightCol1,
        ];
        return {
          ...state,
          cube: {
            ...state.cube,
            0: newCurrentSideRotateLeftDown,
            1: newTopSideRotateLeftDown,
            5: newBackSideRotateLeftDown,
            3: newBottomSideRotateLeftDown,
            4: newLeftSideRotateLeftDown,
          },
        };
      }
      return state;
    case "SPIN_UP":
      // COL_SPUN
      if (action.payload.colSpun === "LEFT") {
        const newCurrentSideRotateLeftDown = state.cube[0].map(
          (number, index) => {
            if (index === 0 || index === 3 || index === 6)
              return state.cube[3][index];
            else return number;
          }
        );
        const newTopSideRotateLeftDown = state.cube[1].map((number, index) => {
          if (index === 0 || index === 3 || index === 6)
            return state.cube[0][index];
          else return number;
        });
        const newBackSideRotateLeftDown = state.cube[5].map((number, index) => {
          const topReversed = getColOfSide(1, 1).reverse();

          if (index === 2) return topReversed[0];
          else if (index === 5) return topReversed[1];
          else if (index === 8) return topReversed[2];
          else return number;
        });
        const newBottomSideRotateLeftDown = state.cube[3].map(
          (number, index) => {
            const topReversed = getColOfSide(5, 3).reverse();
            if (index === 0) return topReversed[0];
            else if (index === 3) return topReversed[1];
            else if (index === 6) return topReversed[2];
            else return number;
          }
        );
        const newLeftSideRotateLeftDown = [
          ...leftCol3,
          ...leftCol2,
          ...leftCol1,
        ];
        return {
          ...state,
          cube: {
            ...state.cube,
            0: newCurrentSideRotateLeftDown,
            1: newTopSideRotateLeftDown,
            5: newBackSideRotateLeftDown,
            3: newBottomSideRotateLeftDown,
            2: newLeftSideRotateLeftDown,
          },
        };
      }
      // COL_SPUN
      if (action.payload.colSpun === "RIGHT") {
        const newCurrentSideRotateLeftDown = state.cube[0].map(
          (number, index) => {
            if (index === 2 || index === 5 || index === 8)
              return state.cube[3][index];
            else return number;
          }
        );
        const newTopSideRotateLeftDown = state.cube[1].map((number, index) => {
          if (index === 2 || index === 5 || index === 8)
            return state.cube[0][index];
          else return number;
        });
        const newBackSideRotateLeftDown = state.cube[5].map((number, index) => {
          const topReversed = getColOfSide(1, 3).reverse();

          if (index === 0) return topReversed[0];
          else if (index === 3) return topReversed[1];
          else if (index === 6) return topReversed[2];
          else return number;
        });
        const newBottomSideRotateLeftDown = state.cube[3].map(
          (number, index) => {
            const topReversed = getColOfSide(5, 1).reverse();
            if (index === 2) return topReversed[0];
            else if (index === 5) return topReversed[1];
            else if (index === 8) return topReversed[2];
            else return number;
          }
        );
        const newLeftSideRotateLeftDown = [
          ...rightCol1.reverse(),
          ...rightCol2.reverse(),
          ...rightCol3.reverse(),
        ];
        return {
          ...state,
          cube: {
            ...state.cube,
            0: newCurrentSideRotateLeftDown,
            1: newTopSideRotateLeftDown,
            5: newBackSideRotateLeftDown,
            3: newBottomSideRotateLeftDown,
            4: newLeftSideRotateLeftDown,
          },
        };
      }
      return state;
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

      return {
        ...state,
        cube: {
          ...state.cube,
          [state.currentSide]: newCurrentSideRotateTopOrBottomToLeft,
          [state.right]: newRightSideRotateTopOrBottomToLeft,
          [state.back]: newBackSideRotateTopOrBottomToLeft,
          [state.left]: newLeftSideRotateTopOrBottomToLeft,
          [state.bottom]: newSpunBottom(
            action.payload.rowSpun,
            action.payload.directionSpun
          ),
          [state.top]: newSpunTop(
            action.payload.rowSpun,
            action.payload.directionSpun
          ),
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
          [state.bottom]: newSpunBottom(
            action.payload.rowSpun,
            action.payload.directionSpun
          ),
          [state.top]: newSpunTop(
            action.payload.rowSpun,
            action.payload.directionSpun
          ),
        },
      };
    case "VIEW_TOP":
      return {
        ...state,
        currentSide: 1,
        back: 3,
        top: 5,
        bottom: 0,
        left: 2,
        right: 4,
      };
    case "VIEW_BOTTOM":
      return {
        ...state,
        currentSide: 3,
        back: 1,
        top: 0,
        bottom: 5,
        left: 2,
        right: 4,
      };
    case "VIEW_LEFT":
      return {
        ...state,
        currentSide: 2,
        back: 4,
        top: 1,
        bottom: 3,
        left: 5,
        right: 0,
      };
    case "VIEW_RIGHT":
      return {
        ...state,
        currentSide: 4,
        back: 2,
        top: 1,
        bottom: 3,
        left: 0,
        right: 5,
      };
    case "VIEW_FRONT":
      return {
        ...state,
        currentSide: 0,
        top: 1,
        left: 2,
        bottom: 3,
        right: 4,
        back: 5,
      };
    case "VIEW_BACK":
      return {
        ...state,
        currentSide: 5,
        top: 1,
        bottom: 3,
        left: 4,
        right: 2,
        back: 0,
      };
    default:
      return state;
  }
};
