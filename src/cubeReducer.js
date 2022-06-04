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
};

export const cubeReducer = (state = initialCubeState, action) => {
  switch (action.type) {
    case "VIEW_TOP":
      return state;
    case "VIEW_BOTTOM":
      return state;
    case "VIEW_LEFT_SIDE":
      return state;
    case "VIEW_RIGHT_SIDE":
      return state;
    default:
      return state;
  }
};
