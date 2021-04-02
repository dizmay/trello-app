import React from 'react';
import { getFirstLetter } from '../../../../../utils/getFirstLetter';
import { MdAssignmentTurnedIn, MdCancel } from 'react-icons/md';
import styles from './MembersMenu.module.scss';

const MembersMenu = ({
  usernames,
  assigned,
  assignUserToTask,
  cancelUserAssignment,
  id,
  boardId,
}) => {
  const assignedUsernames = assigned.map(el => el.username);

  const assign = (e) => {
    const userId = e.currentTarget.getAttribute('id');
    assignUserToTask(id, userId, boardId);
  }

  const cancelAssign = (e) => {
    const userId = e.currentTarget.getAttribute('id');
    cancelUserAssignment(id, userId, boardId);
  }

  return (
    <div className={styles.menu}>
      {
        usernames.map(user => (
          <div className={styles.menu__attributes} key={user.id}>
            <div className={styles.members__avatar}>{getFirstLetter(user.username)}</div>
            {
              assignedUsernames.indexOf(user.username) !== -1
                ? (
                  <button type="button" username={user.username} id={user.id} onClick={cancelAssign}>
                    <MdCancel />
                  </button>
                )
                : (
                  <button type="button" username={user.username} id={user.id} onClick={assign}>
                    <MdAssignmentTurnedIn />
                  </button>
                )
            }
          </div>
        ))
      }
    </div>
  )
}

export default MembersMenu;
