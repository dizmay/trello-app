import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard, deleteBoard, getUserBoards } from '../../actions/boards/actions';
import { selectIsLoading, selectUserBoards } from '../../selectors/boardSelectors';
import { getUserId } from '../../selectors/authSelectors';
import BoardGrid from './BoardGrid';

const BoardGridContainer = () => {

  const userBoards = useSelector(selectUserBoards);
  const userId = useSelector(getUserId);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const createNewBoard = (boardData) => dispatch(createBoard(boardData));
  const removeBoard = (id) => dispatch(deleteBoard(id));

  useEffect(() => {
    dispatch(getUserBoards());
  }, [dispatch]);

  return (
    <BoardGrid userBoards={userBoards} userId={userId} createNewBoard={createNewBoard} removeBoard={removeBoard} isLoading={isLoading} />
  )
}

export default BoardGridContainer;
