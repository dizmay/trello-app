import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectBoardUsers, selectIsError, selectError, selectIsLoading } from '../../selectors/boardSelectors';
import { selectColumnError, selectColumnIsError, selectColumnIsLoading } from '../../selectors/boardColumnsSelectors';
import { inviteUser, getBoardUsers } from '../../actions/boards/actions';
import {
  createColumn,
  getColumns,
  removeColumn,
  updateColumnTitle,
  createNewCard,
  deleteColumnCard,
  updateColumnCard,
  changeColumnOrder,
  changeCardPosition,
  assignUser,
  cancelAssignment,
  updateColumnCardNoLoader
} from '../../actions/boardColumns/actions';
import { selectUserId } from '../../selectors/authSelectors';
import { selectColumns } from '../../selectors/boardColumnsSelectors';
import { createComment, refreshComments } from '../../actions/comments/actions';
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
  const columnsIsLoading = useSelector(selectColumnIsLoading);
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
    (id, columnId, boardId) => dispatch(deleteColumnCard(id, columnId, boardId)),
    [dispatch]
  );

  const updateCard = useCallback(
    (id, title, description, boardId) => dispatch(updateColumnCard(id, title, description, boardId)),
    [dispatch]
  );

  const updateCardNoLoader = useCallback(
    (id, title, description, boardId) => dispatch(updateColumnCardNoLoader(id, title, description, boardId)),
    [dispatch]
  );

  const columnMove = useCallback(
    (dragId, dropId, boardId) => dispatch(changeColumnOrder(dragId, dropId, boardId)),
    [dispatch]
  );

  const cardMove = useCallback(
    (dragId, dropId, dragColumnId, dropColumnId, side, boardId) => dispatch(changeCardPosition(dragId, dropId, dragColumnId, dropColumnId, side, boardId)),
    [dispatch]
  );

  const assignUserToTask = useCallback(
    (taskId, userId, boardId, columnId) => dispatch(assignUser(taskId, userId, boardId, columnId)),
    [dispatch]
  );

  const cancelUserAssignment = useCallback(
    (taskId, userId, boardId) => dispatch(cancelAssignment(taskId, userId, boardId)),
    [dispatch]
  );

  const newComment = useCallback(
    (text, userId, taskId, boardId, columnId) => dispatch(createComment({ text, userId, taskId, boardId, columnId })),
    [dispatch]
  );

  const refresh = useCallback(
    (boardId) => dispatch(refreshComments(boardId)),
    [dispatch]
  );

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
      updateCardNoLoader={updateCardNoLoader}
      columnMove={columnMove}
      cardMove={cardMove}
      assignUserToTask={assignUserToTask}
      cancelUserAssignment={cancelUserAssignment}
      columnsIsLoading={columnsIsLoading}
      newComment={newComment}
      refresh={refresh}
    />
  )
}

export default BoardContainer;
