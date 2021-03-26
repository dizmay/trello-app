import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectBoardUsers, selectIsError, selectError, selectIsLoading } from '../../selectors/boardSelectors';
import { selectColumnError, selectColumnIsError } from '../../selectors/boardColumnsSelectors';
import { inviteUser, getBoardUsers } from '../../actions/boards/actions';
import { createColumn, getColumns, removeColumn, updateColumnTitle, createNewCard, deleteColumnCard, updateColumnCard, columnDnD } from '../../actions/boardColumns/actions';
import { selectUserId } from '../../selectors/authSelectors';
import { selectColumns } from '../../selectors/boardColumnsSelectors';
import Board from './Board';

const BoardContainer = () => {

  const { params } = useParams()
  const [id, title] = params.split('&');
  const usernames = useSelector(selectBoardUsers);
  const userId = useSelector(selectUserId);
  const boardError = useSelector(selectError);
  const columnError = useSelector(selectColumnError);
  const boardIsError = useSelector(selectIsError);
  const columnIsError = useSelector(selectColumnIsError);
  const isLoading = useSelector(selectIsLoading);
  const boardColumns = useSelector(selectColumns);
  const dispatch = useDispatch();

  const invite = useCallback(
    (username, boardId, userId) => dispatch(inviteUser(username, boardId, userId)),
    [dispatch]
  );

  const createNewColumn = useCallback(
    (title, boardId) => dispatch(createColumn(title, boardId)),
    [dispatch]
  );

  const removeCol = useCallback(
    (columnId, boardId) => dispatch(removeColumn(columnId, boardId)),
    [dispatch]
  );

  const updateCol = useCallback(
    (columnId, title, boardId) => dispatch(updateColumnTitle(columnId, title, boardId)),
    [dispatch]
  );

  const createCard = useCallback(
    (title, description, columnId, boardId) => dispatch(createNewCard(title, description, columnId, boardId)),
    [dispatch]
  );

  const deleteCard = useCallback(
    (id, boardId) => dispatch(deleteColumnCard(id, boardId)),
    [dispatch]
  );

  const updateCard = useCallback(
    (id, title, description, boardId) => dispatch(updateColumnCard(id, title, description, boardId)),
    [dispatch]
  );

  const columnDrag = useCallback(
    (dragId, dropId, boardId) => dispatch(columnDnD(dragId, dropId, boardId)),
    [dispatch]
  )

  useEffect(() => {
    dispatch(getColumns(id))
    dispatch(getBoardUsers({ boardId: id }));
  }, [id, dispatch])

  return (
    <Board
      id={id}
      title={title}
      invite={invite}
      usernames={usernames}
      userId={userId}
      boardError={boardError}
      boardIsError={boardIsError}
      columnError={columnError}
      columnIsError={columnIsError}
      isLoading={isLoading}
      createNewColumn={createNewColumn}
      boardColumns={boardColumns}
      removeCol={removeCol}
      updateCol={updateCol}
      createCard={createCard}
      deleteCard={deleteCard}
      updateCard={updateCard}
      columnDrag={columnDrag}
    />
  )
}

export default BoardContainer;
