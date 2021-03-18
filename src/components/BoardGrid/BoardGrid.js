import React, { useState } from 'react';
import Loader from '../Loader/Loader';
import EmptyBoard from './EmptyBoard/EmptyBoard';
import BoardModal from './BoardModal/BoardModal';
import FilledBoard from './FilledBoard/FilledBoard';
import styles from './BoardGrid.module.scss';

const BoardGrid = ({ userBoards, userId, createNewBoard, removeBoard, isLoading }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <div className={styles.boardContainer}>
      <h2>My boards</h2>
      <div className={styles.boardGrid}>
        {
          showModal && <BoardModal setShowModal={setShowModal} createNewBoard={createNewBoard} userId={userId} />
        }
        {
          isLoading
            ? <Loader />
            : (<>
              {
                userBoards.map(el => <FilledBoard key={el.id} id={el.id} title={el.title} removeBoard={removeBoard} />)
              }
              <EmptyBoard setShowModal={setShowModal} />
            </>)
        }
      </div>
    </div>
  )
}

export default BoardGrid;
