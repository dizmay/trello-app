import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import boardReducer from '../reducers/boardsReducer';

export default combineReducers({
  auth: authReducer,
  board: boardReducer,
})