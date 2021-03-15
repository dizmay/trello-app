import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBoard, getUserBoards } from '../../actions/boards/actions';
import { selectUserBoards } from '../../selectors/boardSelectors';
import { getUserId } from '../../selectors/authSelectors';
import BoardGrid from './BoardGrid';

const BoardGridContainer = () => {

  const userBoards = useSelector(selectUserBoards);
  const [setBoards] = useState(userBoards)
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  const createNewBoard = (boardData) => dispatch(createBoard(boardData));
  // const getBoards = () => dispatch(getUserBoards());

  useEffect(() => {
    dispatch(getUserBoards());
  }, [setBoards, dispatch]);

  return (
    <BoardGrid userBoards={userBoards} userId={userId} createNewBoard={createNewBoard} />
  )
}

export default BoardGridContainer;
