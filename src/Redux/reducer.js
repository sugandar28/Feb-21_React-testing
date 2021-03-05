import { SAVE_COMMENT } from "Redux/actionTypes";

const INITIAL_STATE = [];

const commentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export { commentReducer };
