import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  games: gameReducer,
});

export default rootReducer;
