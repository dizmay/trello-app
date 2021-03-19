import React, { useState } from 'react';
import useComponentVisible from '../../utils/useComponentVisible';
import Loader from '../Loader/Loader';
import EmptyBoard from './EmptyBoard/EmptyBoard';
import BoardModal from './BoardModal/BoardModal';
import FilledBoard from './FilledBoard/FilledBoard';
import NotificationElement from '../NotificationElement/NotificationElement';
import styles from './BoardGrid.module.scss';

const BoardGrid = ({ userBoards, userId, createNewBoard, removeBoard, isLoading, isError, error }) => {

  const [notification, setNotification] = useState(false);
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <div className={styles.boardContainer}>
      <h2>My boards</h2>
      <div className={styles.boardGrid}>
        {
          isLoading
            ? <Loader />
            : (<>
              {
                userBoards.map(el => <FilledBoard key={el.id} id={el.id} title={el.title} removeBoard={removeBoard} />)
              }
              <EmptyBoard setShowModal={setIsComponentVisible} />
            </>)
        }
      </div>
      <div ref={ref}>
        {
          isComponentVisible && <BoardModal createNewBoard={createNewBoard} userId={userId} setIsComponentVisible={setIsComponentVisible} setNotification={setNotification} />
        }
      </div>
      {
        (isError && notification) && <NotificationElement text={error} handleClick={() => { setNotification(false) }} />
      }
    </div>
  )
}

export default BoardGrid;
