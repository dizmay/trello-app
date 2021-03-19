import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectBoardUsers, selectIsError, selectError, selectIsLoading } from '../../selectors/boardSelectors';
import { inviteUser, getBoardUsers } from '../../actions/boards/actions';
import { createColumn, getColumns, removeColumn } from '../../actions/boardColumns/actions';
import { selectUserId } from '../../selectors/authSelectors';
import { selectColumns } from '../../selectors/boardColumnsSelectors';
import Board from './Board';

const BoardContainer = () => {
  const { params } = useParams()
  const [id, title] = params.split('&');
  const usernames = useSelector(selectBoardUsers);
  const userId = useSelector(selectUserId);
  const error = useSelector(selectError);
  const isError = useSelector(selectIsError);
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
  )
  const updateCol = useCallback(
    (columnId, title, boardId) => dispatch(removeColumn(columnId, title, boardId)),
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
      error={error}
      isError={isError}
      isLoading={isLoading}
      createNewColumn={createNewColumn}
      boardColumns={boardColumns}
      removeCol={removeCol}
      updateCol={updateCol}
    />
  )
}

export default BoardContainer;
