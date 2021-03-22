import { combineReducers } from "redux";
import authReducer from "../reducers/authReducer";
import boardReducer from '../reducers/boardsReducer';
import usersReducer from '../reducers/usersReducer';
import boardColumnsReducer from './boardColumnsReducer';
import columnCardsReducer from './columnCardsReducer';

export default combineReducers({
  auth: authReducer,
  board: boardReducer,
  users: usersReducer,
  columns: boardColumnsReducer,
  cards: columnCardsReducer,
})