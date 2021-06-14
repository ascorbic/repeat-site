import * as types from "../actions/_types";
import initialState from "../initial_state";

export default function countReducer(state = initialState.count, action) {
  switch (action.type) {
    case types.SET_COUNT_ACTION:
      return action.count;
    default:
      return state;
  }
}
