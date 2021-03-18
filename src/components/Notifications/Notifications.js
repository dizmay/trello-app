import React from 'react';
import HeaderContainer from '../Header/HeaderContainer';
import Loader from '../Loader/Loader';
import NotificationItem from './NotificationItem/NotificationItem';
import styles from './Notifications.module.scss';

const Notifications = ({ userNotifications, isLoading, reply }) => {
  return (
    <>
      <HeaderContainer />
      <div className={styles.ntf__container}>
        <h2>My notifications</h2>
        {
          isLoading
            ? <Loader />
            : (<>
              {
                userNotifications.map(el => <NotificationItem key={el.invId} user={el.username} board={el.title} invId={el.invId} reply={reply} />)
              }
            </>)
        }
      </div>
    </>
  )
}

export default Notifications;
