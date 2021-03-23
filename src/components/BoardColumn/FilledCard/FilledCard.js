import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti'
import ButtonElement from '../../ButtonElement/ButtonElement';
import FilledCardForm from './FilledCardForm/FilledCardForm';
import styles from './FilledCard.module.scss';

const FilledCard = ({ id, boardId, cardTitle, cardDesc, updateCard, deleteCard, setNotification }) => {
  const [editMode, setEditMode] = useState(false);
  const [changeTitle, setChangeTitle] = useState(cardTitle);
  const [changeDescription, setChangeDescription] = useState(cardDesc);

  const onTitleChange = (e) => {
    setChangeTitle(e.currentTarget.value)
  }
  const onDescriptionChange = (e) => {
    setChangeDescription(e.currentTarget.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    updateCard(id, changeTitle, changeDescription, boardId);
    setEditMode(false);
    setNotification(true);
  }

  const removeCard = () => {
    deleteCard(id, boardId);
  }
  return (
    <>
      {
        editMode
          ? <FilledCardForm
            handleClick={onFormSubmit}
            changeTitle={changeTitle}
            changeDescription={changeDescription}
            onTitleChange={onTitleChange}
            onDescriptionChange={onDescriptionChange}
          />
          : (
            <div className={styles.boardColumn__card}>
              <ButtonElement children={<TiPencil />} type="button" colorBlack transparent handleClick={() => { setEditMode(true) }} />
              <h2>{cardTitle}</h2>
              <p>{cardDesc}</p>
              <ButtonElement children={<MdDeleteForever />} type="button" basicFont transparent colorBlack handleClick={removeCard} />
            </div>
          )
      }
    </>
  )
}

export default FilledCard
