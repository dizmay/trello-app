import React from 'react';
import styles from './NotificationElement.module.scss';

const NotificationElement = ({ text, type, setNotification }) => {
    const handleClick = () => {
        setNotification(false);
    }
    return (
        <div className={`${styles.notification} ${type ? styles.approval : styles.warning}`}>
            <p className={styles.notification__text}>{text}</p>
            <button className={styles.notification__btn} onClick={handleClick}>Ok</button>
        </div>
    )
}

export default NotificationElement;
