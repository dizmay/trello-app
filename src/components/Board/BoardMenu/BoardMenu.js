import React from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import BoardUsers from '../BoardUsers/BoardUsers';
import styles from './BoardMenu.module.scss';

const BoardMenu = ({ showModal, usernames }) => {
  return (
    <aside className={styles.board__menu}>
      <h2>Menu</h2>
      <ul>
        <li>
          <ButtonElement type="button" basicFont children="Invite user" handleClick={showModal} />
        </li>
        <li>
          <BoardUsers usernames={usernames} />
        </li>
      </ul>
    </aside>
  )
}

export default BoardMenu;
