import { combineReducers } from "redux";
import { sportsReducer } from "./sportsReducer";
import { countriesReducer } from "./countriesReducer";

export default combineReducers({
    sportsReducer,
    countriesReducer
});