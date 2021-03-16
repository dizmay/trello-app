import React from 'react';
import { useParams } from 'react-router';
import HeaderContainer from '../Header/HeaderContainer';
import BoardColumn from '../BoardColumn/BoardColumn';
import styles from './Board.module.scss';

const Board = () => {
  const { params: title } = useParams();
  return (
    <>
      <HeaderContainer />
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          <BoardColumn title="Theory" cardTitle="html" />
          <BoardColumn title="Theory" cardTitle="html" />
        </div>
      </div>
    </>
  )
}

export default Board;
