import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import boardReducer from '../reducers/boardsReducer';
import usersReducer from '../reducers/usersReducer';
import boardColumnsReducer from './boardColumnsReducer';

export default combineReducers({
  auth: authReducer,
  board: boardReducer,
  users: usersReducer,
  columns: boardColumnsReducer,
})