import types from './types';

export const createNewComment = () => ({
  type: types.CREATE_COMMENT,
});

export const createNewCommentSuccess = () => ({
  type: types.CREATE_COMMENT_SUCCESS,
});

export const createNewCommentFailed = (message) => ({
  type: types.CREATE_COMMENT_FAILED,
  payload: message
});
