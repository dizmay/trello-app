import { createBoardAPI, getUserBoardsAPI } from "../../API"
import { createBoardFail, createBoardSuccess, getUserBoardsSuccess } from './actionCreators';

export const createBoard = ({ userId, title }) => async (dispatch) => {
  try {
    const boardData = {
      userId,
      title
    }
    const response = await createBoardAPI.createBoard(boardData);
    dispatch(createBoardSuccess(response.data));
    const refreshBoards = await getUserBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(refreshBoards.data));
  }
  catch(error) {
    const message = error.response.data.message;
    dispatch(createBoardFail(message));
  }
}

export const getUserBoards = () => async (dispatch) => {
  try {
    const response = await getUserBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(response.data));
  }
  catch(error) {
    console.log(error);
  }
}
