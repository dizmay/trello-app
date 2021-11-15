import React from 'react';
import { getFirstLetter } from '../../../../../../utils/getFirstLetter';
import styles from './CommentElement.module.scss';

const CommentElement = ({ username, text }) => {
  return (
    <>
      <div className={styles.comment}>
        <div className={styles.comment__user}>{getFirstLetter(username)}</div>
        <div className={styles.comment__text__container}>
          <p>{`${username}:`}</p>
          <div className={styles.comment__text}>{text}</div>
        </div>
      </div>
      <div className={styles.comment__end} />
    </>
  )
}

export default CommentElement;
