import React from 'react';
import { GrAdd } from 'react-icons/gr';
import styles from './EmptyBoard.module.scss';

const EmptyBoard = ({ setShowModal }) => {
return (
    <div onClick={() => { setShowModal(true) }} className={styles.emptyBoard}>
      <GrAdd />
      <p>Create new board</p>
    </div>
  )
}

export default EmptyBoard;
