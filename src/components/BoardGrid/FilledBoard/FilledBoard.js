import React from 'react';
import { Link } from 'react-router-dom';
import { IoCloseCircle } from 'react-icons/io5';
import styles from './FilledBoard.module.scss';

const FilledBoard = ({ id, title, removeBoard }) => {
  return (
    <div className={styles.filledBoard}>
      <button className={styles.filledBoard__remove} onClick={() => removeBoard(id)}>
        <IoCloseCircle />
      </button>
      <Link to={`/boards/${title}`}>
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default FilledBoard;
