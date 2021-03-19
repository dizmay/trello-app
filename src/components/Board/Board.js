import React, { useState } from 'react';
import useComponentVisible from '../../utils/useComponentVisible';
import HeaderContainer from '../Header/HeaderContainer';
import NotificationElement from '../NotificationElement/NotificationElement';
import BoardColumn from '../BoardColumn/BoardColumn';
import ButtonElement from '../ButtonElement/ButtonElement';
import BoardModal from './BoardModal/BoardModal';
import BoardUsers from './BoardUsers/BoardUsers';
import Loader from '../Loader/Loader';
import styles from './Board.module.scss';

const Board = ({ id, title, invite, usernames, userId, isError, error, isLoading }) => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [notification, setNotification] = useState(false);
  const showModal = () => {
    setIsComponentVisible(true);
  }
  return (
    <>
      <HeaderContainer />
      <div className={styles.board__container}>
        <h2>{title}</h2>
        <div className={styles.board}>
          <BoardColumn title="Theory" cardTitle="html" />
          <BoardColumn title="Theory" cardTitle="html" />
        </div>
        <aside className={styles.board__menu}>
          <h2>Menu</h2>
          <ul>
            <li>
              <ButtonElement type="button" basicFont children="Invite user" handleClick={showModal} />
            </li>
            <li>
              <BoardUsers usernames={usernames} />
            </li>
          </ul>
        </aside>
        <div ref={ref}>
          {
            isLoading
              ? <Loader posMiddle />
              : (<>
                {
                  isComponentVisible && <BoardModal
                    id={id} invite={invite}
                    userId={userId}
                    setIsComponentVisible={setIsComponentVisible}
                    setNotification={setNotification}
                  />
                }
              </>)
          }
        </div>
        {
          (isError && notification) && <NotificationElement text={error} handleClick={() => { setNotification(false) }} />
        }
      </div>
    </>
  )
}

export default Board;
