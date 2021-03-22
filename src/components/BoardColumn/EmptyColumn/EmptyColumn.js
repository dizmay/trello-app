import React from 'react';
import { GrAdd } from 'react-icons/gr';
import ButtonElement from '../../ButtonElement/ButtonElement';
import styles from './EmptyColumn.module.scss';

const EmptyColumn = ({ handleClick, columnTitle, showColumnTitle, onColumnTitleChange, createColumn, boardId, setColumnTitle }) => {
  const onTitleSubmit = (e) => {
    e.preventDefault();
    createColumn(columnTitle, boardId);
    setColumnTitle('')
  }
  return (
    <div className={styles.emptyColumn}>
      {
        showColumnTitle
          ? (
            <form id="colTitle" onSubmit={onTitleSubmit}>
              <div>
                <label htmlFor="title">Title:</label>
                <input type="text" name="title" id="title" form="colTitle" value={columnTitle} onChange={onColumnTitleChange} />
              </div>
              <ButtonElement children="Create" type="submit" />
            </form>
          )
          : (
            <div onClick={handleClick} className={styles.addColumn}>
              <GrAdd />
              <span>Add another column</span>
            </div>
          )
      }
    </div>
  )
}

export default EmptyColumn;
