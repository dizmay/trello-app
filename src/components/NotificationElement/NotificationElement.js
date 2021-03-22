import React from 'react';
import styles from './NotificationElement.module.scss';

const NotificationElement = ({ text, handleClick }) => {
  return (
    <div className={styles.notification}>
      <p className={styles.notification__text}>{text}</p>
      <button className={styles.notification__btn} onClick={handleClick}>OK</button>
    </div>
  )
}

export default NotificationElement;
