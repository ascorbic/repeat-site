import * as types from "./_types";

export function setCountAction(count = 0) {
  return { type: types.SET_COUNT_ACTION, count };
}
