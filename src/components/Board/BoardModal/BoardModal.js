import React, { useState } from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import styles from './BoardModal.module.scss';

const BoardModal = ({ id, invite, userId, setIsComponentVisible, setNotification }) => {
  const [username, setUsername] = useState('');
  const onUsernameChange = (e) => {
    setUsername(e.currentTarget.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    invite(username, id, userId);
    setNotification(true);
    setIsComponentVisible(false);
  }
  return (
    <form id="invite" className={styles.inviteForm} onSubmit={onSubmit}>
      <h2>Invite user</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" name="username" id="username" form="invite" placeholder="Username" value={username} onChange={onUsernameChange} />
      </div>
      <ButtonElement type="submit" children="Invite" basicFont />
    </form>
  )
}

export default BoardModal;
