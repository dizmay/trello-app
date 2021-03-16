import React from 'react';
import { getFirstLetter } from '../../../utils/getFirstLetter';
import styles from './BoardUsers.module.scss';

const BoardUsers = ({ usernames }) => {
  return (
    <div className={styles.boardUsers}>
      <h3>Board users:</h3>
      <div className={styles.users}>
        {
          usernames.map((elem, id) => <div key={id} className={styles.users__avatar}>{getFirstLetter(elem)}</div>)
        }
      </div>
    </div>
  )
}

export default BoardUsers;
