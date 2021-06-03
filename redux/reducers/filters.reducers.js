import * as types from '../actions/_types'
import initialState from '../initial_state';

// COUNTER REDUCER
export default function counterReducer(state = initialState.filters, action) {
  switch (action.type) {
    case types.SET_FILTERS:
      return { ...state, ...action.filters }
    case types.UNSET_FILTERS:
      return { }
    default:
      return state
  }
}
