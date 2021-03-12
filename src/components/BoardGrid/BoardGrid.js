import React, { useState } from 'react';
import Board from '../Board/Board';
import EmptyBoard from './EmptyBoard/EmptyBoard';
import BoardModal from './BoardModal/BoardModal';
import styles from './BoardGrid.module.scss';

const BoardGrid = ({ userBoards, userId, createNewBoard }) => {

  const [showModal, setShowModal] = useState(false)

  let emptyBoards = new Array(8 - userBoards.length).fill(null);
  let actualBoards = userBoards.concat(emptyBoards);

  return (
    <div className={styles.boardGrid}>
      {
        showModal && <BoardModal setShowModal={setShowModal} createNewBoard={createNewBoard} userId={userId} />
      }
      {
        actualBoards.map((el, id) => {
          if(el !== null) return <Board key={id} title={el} />
          else return <EmptyBoard setShowModal={setShowModal} key={id} />;
        })
      }
    </div>
  )
}

export default BoardGrid;
