import React from 'react';
import { MdDone } from 'react-icons/md';
import styles from './ModalForm.module.scss';

const ModalForm = ({ changeValue, onValueChange, onFormSubmit }) => {

  const stopClick = (e) => {
    e.stopPropagation()
  }

  const stopDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return (
    <form id="renameForm" onSubmit={onFormSubmit} onClick={stopClick} onDragStart={stopDrag} draggable>
      <div className={styles.form__container}>
        <input type="text" id="element" form="renameForm" name="element" value={changeValue} onChange={onValueChange} />
        <button type="submit">
          <MdDone />
        </button>
      </div>
    </form>
  )
}

export default ModalForm;
