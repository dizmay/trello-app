import React, { useState } from 'react';
import useComponentVisible from '../../utils/useComponentVisible';
import NotificationElement from '../NotificationElement/NotificationElement';
import BoardColumn from '../BoardColumn/BoardColumn';
import ButtonElement from '../ButtonElement/ButtonElement';
import BoardModal from './BoardModal/BoardModal';
import BoardUsers from './BoardUsers/BoardUsers';
import Loader from '../Loader/Loader';
import EmptyColumn from '../BoardColumn/EmptyColumn/EmptyColumn';
import styles from './Board.module.scss';

const Board = ({ id, title, invite, usernames, userId, isError, error, isLoading, createNewColumn, boardColumns, removeCol, updateCol }) => {
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
    setShowColumnTitle(!showColumnTitle);
  }
  return (
    <>
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          {
            boardColumns.map(el => <BoardColumn key={el.id} title={el.title} removeCol={removeCol} columnId={el.id} boardId={id} />)
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
        <aside className={styles.board__menu}>
          <h2>Menu</h2>
          <ul>
            <li>
              <ButtonElement type="button" basicFont children="Invite user" handleClick={showModal} />
            </li>
            <li>
              <BoardUsers usernames={usernames} />
            </li>
          </ul>
        </aside>
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
          (isError && notification) && <NotificationElement text={error} handleClick={() => { setNotification(false) }} />
        }
      </div>
    </>
  )
}

export default Board;
