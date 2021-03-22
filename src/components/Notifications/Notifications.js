import React from 'react';
import Loader from '../Loader/Loader';
import NotificationItem from './NotificationItem/NotificationItem';
import styles from './Notifications.module.scss';

const Notifications = ({ userNotifications, isLoading, reply }) => {
  return (
    <>
      <div className={styles.ntf__container}>
        <h2>My notifications</h2>
        {
          isLoading
            ? <Loader />
            : (<>
              {
                userNotifications.length === 0
                  ? <p className={styles.ntf__empty}>You don't have any notifications!</p>
                  : userNotifications.map(el => <NotificationItem key={el.invId} user={el.username} board={el.title} invId={el.invId} reply={reply} />)
              }
            </>)
        }
      </div>
    </>
  )
}

export default Notifications;
