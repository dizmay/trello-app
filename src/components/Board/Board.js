import React from 'react';
import { useParams } from 'react-router';
import HeaderContainer from '../Header/HeaderContainer';
import BoardColumn from '../BoardColumn/BoardColumn';
import styles from './Board.module.scss';

const Board = () => {
  const linkParams = useParams();
  const [id, title] = linkParams.params.split('-');
  return (
    <>
    <HeaderContainer />
      <div className={styles.board}>
        <h2>{title}</h2>
        <BoardColumn title="Theory" cardTitle="html" />
      </div>
    </>
  )
}

export default Board;
