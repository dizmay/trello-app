import { userBoardsAPI } from "../../API"
import {
  createNewBoard,
  createBoardFail,
  createBoardSuccess,
  getUserBoardsSuccess,
  deleteUserBoard,
  deleteUserBoardFailed,
  deleteUserBoardSuccess,
  inviteUserOnBoard,
  fetchBoardUsers
} from './actionCreators';

export const createBoard = ({ userId, title }) => async (dispatch) => {
  try {
    const boardData = {
      userId,
      title
    }
    const response = await userBoardsAPI.createBoard(boardData);
    dispatch(createNewBoard());
    dispatch(createBoardSuccess(response.data));
    const refreshBoards = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(refreshBoards.data));
  }
  catch (error) {
    const { message } = error.response.data;
    dispatch(createBoardFail(message));
  }
}

export const getUserBoards = () => async (dispatch) => {
  try {
    const response = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(response.data));
  }
  catch (error) {
    console.log(error.response.data.message);
  }
}

export const deleteBoard = (id) => async (dispatch) => {
  try {
    const response = await userBoardsAPI.deleteBoard(id);
    dispatch(deleteUserBoard());
    dispatch(deleteUserBoardSuccess(response.data));
    const refreshBoards = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(refreshBoards.data));
  }
  catch (error) {
    dispatch(deleteUserBoardFailed(error.response))
  }
}

export const inviteUser = (username, boardId) => async (dispatch) => {
  try {
    const response = await userBoardsAPI.inviteUser(username, boardId);
    dispatch(inviteUserOnBoard(response));
    const refreshBoardUsers = await userBoardsAPI.fetchUsersOfBoard({ boardId });
    dispatch(fetchBoardUsers(refreshBoardUsers.data));
  }
  catch (error) {
    console.log(error.response.data.message);
  }
}

export const getBoardUsers = (boardId) => async (dispatch) => {
  try {
    const response = await userBoardsAPI.fetchUsersOfBoard(boardId);
    dispatch(fetchBoardUsers(response.data));
  }
  catch(error) {
    console.log(error.response.data.message);
  }
}
