import { userBoardsAPI } from "../../API"
import { createNewBoard, createBoardFail, createBoardSuccess, getUserBoardsSuccess } from './actionCreators';

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
  catch(error) {
    const { message } = error.response.data;
    dispatch(createBoardFail(message));
  }
}

export const getUserBoards = () => async (dispatch) => {
  try {
    const response = await userBoardsAPI.requestUserBoards();
    dispatch(getUserBoardsSuccess(response.data));
  }
  catch(error) {
    console.log(error);
  }
}
