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
}) => {

  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [notification, setNotification] = useState(false);
  const [showColumnTitle, setShowColumnTitle] = useState(false);
  const [columnTitle, setColumnTitle] = useState('');

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

  return (
    <>
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          {
            boardColumns.map(el => (
              <BoardColumn
                key={el.id}
                title={el.title}
                removeCol={removeCol}
                columnId={el.id}
                boardId={id}
                updateCol={updateCol}
                boardColumns={boardColumns}
                tasks={el['tasks.tasks']}
                createCard={createCard}
                deleteCard={deleteCard}
                updateCard={updateCard}
                setNotification={setNotification}
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
