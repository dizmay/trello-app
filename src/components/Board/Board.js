import React, { useState } from 'react';
import useComponentVisible from '../../utils/useComponentVisible';
import NotificationElement from '../NotificationElement/NotificationElement';
import BoardColumn from '../BoardColumn/BoardColumn';
import BoardModal from './BoardModal/BoardModal';
import Loader from '../Loader/Loader';
import EmptyColumn from '../BoardColumn/EmptyColumn/EmptyColumn';
import BoardMenu from './BoardMenu/BoardMenu';
import styles from './Board.module.scss';

const Board = ({
  id,
  title,
  invite,
  usernames,
  userId,
  boardIsError,
  boardError,
  columnIsError,
  columnError,
  isLoading,
  createNewColumn,
  boardColumns,
  removeCol,
  updateCol,
  createCard,
  deleteCard,
  updateCard,
  columnMove,
  cardMove,
}) => {

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [notification, setNotification] = useState(false);
  const [showColumnTitle, setShowColumnTitle] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');
  const [dragId, setDragId] = useState(null);
  const [cardDragId, setCardDragId] = useState(null);
  const [dragColumnId, setDragColumnId] = useState(null);

  const onColumnTitleChange = (e) => {
    setColumnTitle(e.currentTarget.value);
  }

  const showModal = () => {
    setIsComponentVisible(true);
  }

  const createColumn = (title, boardId) => {
    createNewColumn(title, boardId);
    setShowColumnTitle(false);
    setNotification(true);
  }

  const onDragOverHandler = (e) => {
    e.preventDefault();
  }

  const onDragStartHandler = (e) => {
    setDragId(Number(e.currentTarget.id));
    e.currentTarget.style.opacity = '0.4';
  }

  const onDragEndHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.opacity = '1';
  }

  const onDragEnterHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.border = '.15rem solid blue';
  }

  const onDragLeaveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.style.border = 'none';
  }

  const onDropHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dropId = Number(e.currentTarget.id);
    if (dragId && dragId !== dropId) {
      columnMove(dragId, dropId, id);
    }
    e.currentTarget.style.border = 'none';
    setDragId(null);
    setCardDragId(null);
    setDragColumnId(null);
  }

  return (
    <>
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          {
            boardColumns.map(column => (
              <BoardColumn
                key={column.id}
                title={column.title}
                removeCol={removeCol}
                columnId={column.id}
                boardId={id}
                updateCol={updateCol}
                tasks={column['tasks.tasks']}
                createCard={createCard}
                deleteCard={deleteCard}
                updateCard={updateCard}
                setNotification={setNotification}
                onDragStartHandler={onDragStartHandler}
                onDragOverHandler={onDragOverHandler}
                onDropHandler={onDropHandler}
                onDragEndHandler={onDragEndHandler}
                onDragEnterHandler={onDragEnterHandler}
                onDragLeaveHandler={onDragLeaveHandler}
                cardMove={cardMove}
                cardDragId={cardDragId}
                setCardDragId={setCardDragId}
                dragColumnId={dragColumnId}
                setDragColumnId={setDragColumnId}
                dragId={dragId}
              />
            ))
          }
          <EmptyColumn
            columnTitle={columnTitle}
            showColumnTitle={showColumnTitle}
            onColumnTitleChange={onColumnTitleChange}
            handleClick={() => { setShowColumnTitle(!showColumnTitle) }}
            createColumn={createColumn}
            boardId={id}
            setColumnTitle={setColumnTitle}
          />
        </div>
        <BoardMenu showModal={showModal} usernames={usernames} />
        <div ref={ref}>
          {
            isLoading
              ? <Loader posMiddle />
              : (<>
                {
                  isComponentVisible && <BoardModal
                    id={id} invite={invite}
                    userId={userId}
                    setIsComponentVisible={setIsComponentVisible}
                    setNotification={setNotification}
                  />
                }
              </>)
          }
        </div>
        {
          ((boardIsError || columnIsError) && notification) && <NotificationElement text={(boardError || columnError)} handleClick={() => { setNotification(false) }} />
        }
      </div>
    </>
  )
}

export default Board;
