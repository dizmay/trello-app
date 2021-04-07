import React from 'react';
import { getFirstLetter } from '../../../utils/getFirstLetter';
import styles from './BoardUsers.module.scss';

const BoardUsers = ({ usernames }) => {
  return (
    <div className={styles.boardUsers}>
      <h3>Board users:</h3>
      <div className={styles.users}>
        {
          usernames.map(elem => <div key={elem.id} className={styles.users__avatar}>{getFirstLetter(elem.username)}</div>)
        }
      </div>
    </div>
  )
}

export default BoardUsers;
