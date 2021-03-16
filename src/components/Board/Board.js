import React, { useState } from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import BoardColumn from '../BoardColumn/BoardColumn';
import ButtonElement from '../ButtonElement/ButtonElement';
import BoardModal from './BoardModal/BoardModal';
import BoardUsers from './BoardUsers/BoardUsers';
import styles from './Board.module.scss';

const Board = ({ id, title, invite, usernames }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <HeaderContainer />
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          <BoardColumn title="Theory" cardTitle="html" />
          <BoardColumn title="Theory" cardTitle="html" />
        </div>
        <aside className={styles.board__menu}>
          <h2>Menu</h2>
          <ul>
            <li>
              <ButtonElement type="button" basicFont children="Invite user" handleClick={() => { setModal(true) }} />
            </li>
            <li>
              <BoardUsers usernames={usernames} />
            </li>
          </ul>
        </aside>
        {
          modal && <BoardModal id={id} setModal={setModal} invite={invite} />
        }
      </div>
    </>
  )
}

export default Board;
