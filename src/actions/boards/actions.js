import { userBoardsAPI } from "../../API"
import {
  createNewBoard,
  createBoardFail,
  createBoardSuccess,
  getUserBoardsAC,
  getUserBoardsSuccess,
  getUserBoardsFailed,
  deleteUserBoard,
  deleteUserBoardFailed,
  deleteUserBoardSuccess,
  inviteUserOnBoard,
  fetchBoardUsers,
  inviteUserOnBoardFailed,
  inviteUserOnBoardSuccess
} from './actionCreators';
import getErrorMessage from '../../utils/getErrorMessage';

export const createBoard = ({ userId, title }) => async (dispatch) => {
  try {
    dispatch(createNewBoard());
    const boardData = {
      userId,
      title
    }
    const response = await userBoardsAPI.createBoard(boardData);
    dispatch(createBoardSuccess(response.data));
    const refreshBoards = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(refreshBoards.data));
  }
  catch (error) {
    dispatch(createBoardFail(getErrorMessage(error)));
  }
}

export const getUserBoards = () => async (dispatch) => {
  try {
    dispatch(getUserBoardsAC());
    const response = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(response.data));
  }
  catch (error) {
    dispatch(getUserBoardsFailed())
  }
}

export const deleteBoard = (id) => async (dispatch) => {
  try {
    dispatch(deleteUserBoard());
    const response = await userBoardsAPI.deleteBoard(id);
    const refreshBoards = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(refreshBoards.data));
    dispatch(deleteUserBoardSuccess(response.data));
  }
  catch (error) {
    dispatch(deleteUserBoardFailed(error.response))
  }
}

export const inviteUser = (username, boardId, userId) => async (dispatch) => {
  try {
    dispatch(inviteUserOnBoard());
    const response = await userBoardsAPI.inviteUser(username, boardId, userId);
    const refreshBoardUsers = await userBoardsAPI.fetchUsersOfBoard({ boardId });
    dispatch(fetchBoardUsers(refreshBoardUsers.data));
    dispatch(inviteUserOnBoardSuccess(response));
  }
  catch (error) {
    dispatch(inviteUserOnBoardFailed(getErrorMessage(error)));
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
