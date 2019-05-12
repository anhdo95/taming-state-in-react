import { FILTER_SET } from "../constant";

const initialState = "SHOW_ALL";

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_SET: {
      return applySetFilter(state, action);
    }
    default:
      return state;
  }
};

function applySetFilter(state, action) {
  return action.filter;
}
