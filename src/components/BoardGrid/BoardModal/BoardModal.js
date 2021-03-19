import React, { useState } from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import styles from './BoardModal.module.scss';

const BoardModal = ({ createNewBoard, userId, setIsComponentVisible, setNotification }) => {

  const [title, setTitle] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  }

  const closeModal = () => {
    setIsComponentVisible(false);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const boardData = { userId, title };
    createNewBoard(boardData);
    setTitle('');
    setNotification(true);
    setIsComponentVisible(false);
  }

  return (
    <form id="titleForm" className={styles.boardGrid__modal} onSubmit={onSubmit}>
      <span>New board</span>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Board title:</label>
        <input type="text" name="title" id="title" form="titleForm" placeholder="Title for your board" value={title} onChange={onTitleChange} />
      </div>
      <div className={styles.btn__container}>
        <ButtonElement type="submit" basicFont children="Create" />
        <ButtonElement type="button" basicFont children="Cancel" handleClick={closeModal} />
      </div>
    </form>
  )
}

export default BoardModal;
