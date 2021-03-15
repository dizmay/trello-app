import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FilledBoard.module.scss';

const FilledBoard = ({ id, title }) => {
  return (
    <div className={styles.filledBoard}>
      <Link to={`/boards/${title}`}>
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default FilledBoard;
