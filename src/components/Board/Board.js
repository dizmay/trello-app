import React from 'react';
import BoardColumn from '../BoardColumn/BoardColumn';
import styles from './Board.module.scss';

const Board = ({ title }) => {
  return (
    <div className={styles.board}>
      <h2>{title}</h2>
      <BoardColumn title="Theory" cardTitle="html" />
    </div>
  )
}

export default Board;
