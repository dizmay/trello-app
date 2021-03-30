import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti'
import ButtonElement from '../../ButtonElement/ButtonElement';
import FilledCardForm from './FilledCardForm/FilledCardForm';
import styles from './FilledCard.module.scss';

const FilledCard = ({
  id,
  boardId,
  cardTitle,
  cardDesc,
  updateCard,
  deleteCard,
  setNotification,
  columnId,
  dragOverHandler,
  dragStartHandler,
  dropHandler,
  dropNextId,
  dropPrevId,
}) => {
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
    deleteCard(id, columnId, boardId);
  }

  return (
    <div
      className={styles.card__container}
      onDragOver={dragOverHandler}
    >
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
            <div className={styles.boardColumn__card}
              draggable
              drag={id}
              col={columnId}
              onDragStart={dragStartHandler}
              
              onDragEnd={(e) => { e.preventDefault() }}
              onDragEnter={(e) => { e.preventDefault() }}
              onDragLeave={(e) => { e.preventDefault() }}
            >
              <ButtonElement children={<TiPencil />} type="button" smallFont colorBlack transparent handleClick={() => { setEditMode(true) }} />
              <div className={styles.draggable} id={`${dropPrevId}`} onDrop={dropHandler} col={columnId}>
                <h2>{cardTitle}</h2>
              </div>
              <div className={styles.draggable} id={id} onDrop={dropHandler} col={columnId}>
                <p>{cardDesc}</p>
              </div>
              <ButtonElement children={<MdDeleteForever />} type="button" smallFont transparent colorBlack handleClick={removeCard} />
            </div>
          )
      }
    </div>
  )
}

export default FilledCard
