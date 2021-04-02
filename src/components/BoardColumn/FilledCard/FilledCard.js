import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti'
import ButtonElement from '../../ButtonElement/ButtonElement';
import FilledCardForm from './FilledCardForm/FilledCardForm';
import FilledCardMembers from './FilledCardMembers/FilledCardMembers';
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
  dragEndHandler,
  dragLeaveHandler,
  dragEnterHandler,
  usernames,
  assigned,
  assignUserToTask,
  cancelUserAssignment,
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
              onDragEnd={dragEndHandler}
            >
              <div className={styles.card__buttons}>
                <ButtonElement children={<TiPencil />} type="button" smallFont colorBlack transparent handleClick={() => { setEditMode(true) }} />
                <ButtonElement children={<MdDeleteForever />} type="button" smallFont transparent colorBlack handleClick={removeCard} />
              </div>
              <div
                className={styles.draggableTop}
                id={id}
                side="top"
                onDrop={dropHandler}
                col={columnId}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
              >
                <h2>{cardTitle}</h2>
                <p>{cardDesc}</p>
              </div>
              <div className={styles.middle} />
              <div
                className={styles.draggableBottom}
                id={id}
                side="bottom"
                onDrop={dropHandler}
                col={columnId}
                onDragEnter={dragEnterHandler}
                onDragLeave={dragLeaveHandler}
              >
                <FilledCardMembers
                  usernames={usernames}
                  assigned={assigned}
                  assignUserToTask={assignUserToTask}
                  cancelUserAssignment={cancelUserAssignment}
                  id={id}
                  boardId={boardId}
                />
              </div>
            </div>
          )
      }
    </div>
  )
}

export default FilledCard
