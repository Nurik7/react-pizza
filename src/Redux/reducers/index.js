import { combineReducers } from "redux";
import filtersReducers from "./filtersReducers";
import homeReducers from "./homeReducers";

const rootReducer = combineReducers({
  filters: filtersReducers,
  home: homeReducers,
});

export default rootReducer;
