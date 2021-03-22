import React from 'react';
import { MdDone } from 'react-icons/md';
import styles from './BoardColumnForm.module.scss';

const BoardColumnForm = ({ handleClick, changeTitle, onTitleChange }) => {
  return (
    <form id="columnTitle" className={styles.columnTitle} onSubmit={handleClick}>
      <div>
        <input type="text" id="title" form="columnTitle" name="title" value={changeTitle} onChange={onTitleChange} />
        <button type="submit">
          <MdDone />
        </button>
      </div>
    </form>
  )
}

export default BoardColumnForm;
