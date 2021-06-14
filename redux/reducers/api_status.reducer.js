import * as types from "../actions/_types";
import initialState from "../initial_state";

function actionTypeEndsInSuccess(type) {
  return type.substring(type.length - 8) === "_SUCCESS";
}
function actionTypeEndsInFailure(type) {
  return type.substring(type.length - 8) === "_FAILURE";
}

export default function apiCallStatusReducer(state = initialState.apiCallsInProgress, action) {
  if (action.type === types.BEGIN_API_CALL) return state + 1;
  if (actionTypeEndsInSuccess(action.type)) return state - 1;
  if (actionTypeEndsInFailure(action.type)) return state - 1;

  return state;
}
