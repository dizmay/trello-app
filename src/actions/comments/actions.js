import { commentsAPI, columnsAPI } from '../../API';
import { createNewComment, createNewCommentFailed, createNewCommentSuccess } from './actionCreators';
import { getBoardColumnsSuccess } from '../boardColumns/actionCreators';

export const createComment = ({ text, userId, taskId, boardId, columnId }) => async (dispatch) => {
  try {
    dispatch(createNewComment())
    await commentsAPI.createComment(text, userId, taskId, boardId, columnId);
    const refreshColumns = await columnsAPI.getBoardColumns(boardId);
    dispatch(getBoardColumnsSuccess(refreshColumns.data));
    dispatch(createNewCommentSuccess());
  }
  catch (error) {
    console.log(error.message)
    dispatch(createNewCommentFailed(error.message))
  }
}
