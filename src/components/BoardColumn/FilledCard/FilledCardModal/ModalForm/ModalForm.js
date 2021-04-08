import React from 'react';
import { MdDone } from 'react-icons/md';
import { stopClick, stopDrag } from '../../../../../utils/stopEvents';
import styles from './ModalForm.module.scss';

const ModalForm = ({ changeValue, onValueChange, onFormSubmit }) => {

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
