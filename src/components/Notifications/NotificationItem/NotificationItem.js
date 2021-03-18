import React from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import styles from './NotificationItem.module.scss';

const NotificationItem = ({ user, board, invId, reply }) => {

  let isAccepted;

  const acceptInvite = () => {
    isAccepted = true;
    reply(invId, isAccepted)
  }

  const declineInvite = () => {
    isAccepted = false;
    reply(invId, isAccepted);
  }

  return (
    <div className={styles.ntf__grid}>
      <div>{user} invites you to board "{board}"</div>
      <div>
        <ButtonElement children="Accept" basicFont handleClick={acceptInvite} />
        <ButtonElement children="Decline" basicFont handleClick={declineInvite} />
      </div>
    </div>
  )
}

export default NotificationItem;
