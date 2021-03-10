import React from 'react';
import styles from './Board.module.scss';
import BoardColumn from '../BoardColumn/BoardColumn';

const Board = () => {
  return (
    <div className={styles.board}>
      <BoardColumn title="Theory" cardTitle="html" />
      <BoardColumn />
    </div>
  )
}

export default Board;
