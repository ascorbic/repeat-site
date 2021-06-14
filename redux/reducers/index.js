// Root reducer
import { combineReducers } from "redux";
import scenarios from "./scenarios.reducer";
import apiCallsInProgress from "./api_status.reducer";
import count from "./count.reducer";
import filters from "./filters.reducer";

const rootReducer = combineReducers({
  scenarios,
  apiCallsInProgress,
  count,
  filters,
});

export default rootReducer;
