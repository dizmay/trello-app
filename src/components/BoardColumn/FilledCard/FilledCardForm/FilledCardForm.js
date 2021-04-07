import React from 'react';
import { MdDone } from 'react-icons/md';
import styles from './FilledCardForm.module.scss';

const FilledCardForm = ({ handleClick, changeTitle, changeDescription, onTitleChange, onDescriptionChange }) => {

  const stopDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const stopClick = (e) => {
    e.stopPropagation();
  }

  return (
    <form id="columnTitle" onSubmit={handleClick} className={styles.card__form} draggable onDragStart={stopDrag} onClick={stopClick}>
      <input type="text" id="title" form="columnTitle" name="title" placeholder="Title" value={changeTitle} onChange={onTitleChange} />
      <input type="text" id="description" form="columnTitle" name="description" placeholder="Description" value={changeDescription} onChange={onDescriptionChange} />
      <button type="submit">
        <MdDone />
      </button>
    </form>
  )
}

export default FilledCardForm
