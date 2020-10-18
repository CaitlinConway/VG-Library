import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gameReducer from "./gameReducer";
import requestReducer from './requestReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  games: gameReducer,
  requests: requestReducer
});

export default rootReducer;
