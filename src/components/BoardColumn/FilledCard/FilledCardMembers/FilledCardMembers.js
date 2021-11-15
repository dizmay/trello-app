import React from 'react';
import { CgAdd } from 'react-icons/cg';
import { getFirstLetter } from '../../../../utils/getFirstLetter';
import useComponentVisible from '../../../../utils/useComponentVisible';
import MembersMenu from './MembersMenu/MembersMenu';
import styles from './FilledCardMembers.module.scss';

const FilledCardMembers = ({
  usernames,
  assigned,
  assignUserToTask,
  cancelUserAssignment,
  id,
  columnId,
  boardId,
}) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  return (
    <div className={styles.card__members}>
      <h2>Assigned users:</h2>
      <div className={styles.members}>
        <div>
          {
            assigned.map((elem, id) => <div key={id} className={styles.members__avatar}>{getFirstLetter(elem.username)}</div>)
          }
        </div>
        <div onClick={(e) => { e.stopPropagation(); setIsComponentVisible(!isComponentVisible) }}>
          <CgAdd />
        </div>
      </div>
      <div ref={ref}>
        {
          isComponentVisible && <MembersMenu
            id={id}
            columnId={columnId}
            boardId={boardId}
            usernames={usernames}
            assigned={assigned}
            assignUserToTask={assignUserToTask}
            cancelUserAssignment={cancelUserAssignment}
          />
        }
      </div>
    </div>
  )
}

export default FilledCardMembers;
