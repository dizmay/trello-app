import React, { useState } from 'react';
import styles from './BoardModal.module.scss';

const BoardModal = ({ setShowModal, createNewBoard, userId }) => {

  const [title, setTitle] = useState('');

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const boardData = { userId, title };
    createNewBoard(boardData);
    setTitle('');
    setShowModal(false);
  }

  return (
    <form id="titleForm" className={styles.boardGrid__modal} onSubmit={onSubmit}>
      <div onClick={() => { setShowModal(false) }}>x</div>
      <h2>New board creation</h2>
      <div className={styles.inputContainer}>
        <label htmlFor="title">Board title:</label>
        <input type="text" name="title" id="title" form="titleForm" placeholder="Title for your board" value={title} onChange={onTitleChange} />
      </div>
      <button type="submit">Create</button>
    </form>
  )
}

export default BoardModal;
