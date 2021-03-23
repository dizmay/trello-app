import React, { useState } from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import { GrAdd } from 'react-icons/gr';
import FilledCardForm from '../FilledCard/FilledCardForm/FilledCardForm';
import styles from './EmptyCard.module.scss';

const EmptyCard = ({ createCard, columnId, boardId, setNotification }) => {
  const [creationMode, setCreationMode] = useState(false);
  const [changeTitle, setChangeTitle] = useState('');
  const [changeDescription, setChangeDescription] = useState('');

  const onTitleChange = (e) => {
    setChangeTitle(e.currentTarget.value)
  }
  const onDescriptionChange = (e) => {
    setChangeDescription(e.currentTarget.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    createCard(changeTitle, changeDescription, columnId, boardId);
    setCreationMode(false);
    setChangeTitle('');
    setChangeDescription('');
    setNotification(true);
  }

  return (
    <>
      {
        creationMode
          ? <FilledCardForm
            changeTitle={changeTitle}
            onTitleChange={onTitleChange}
            changeDescription={changeDescription}
            onDescriptionChange={onDescriptionChange}
            handleClick={onFormSubmit}
          />
          : (
            <div className={styles.boardColumn__func} onClick={() => { setCreationMode(true) }}>
              <ButtonElement children={<GrAdd />} type="button" transparent colorBlack />
              <span>Add another card</span>
            </div>
          )
      }
    </>
  )
}

export default EmptyCard;
