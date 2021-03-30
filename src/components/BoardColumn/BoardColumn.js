import React, { useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti'
import BoardColumnForm from './BoardColumnForm/BoardColumnForm';
import EmptyCard from './EmptyCard/EmptyCard';
import FilledCard from './FilledCard/FilledCard';
import styles from './BoardColumn.module.scss';

const BoardColumn = ({
  title,
  removeCol,
  boardId,
  columnId,
  updateCol,
  tasks,
  createCard,
  deleteCard,
  updateCard,
  setNotification,
  onDragStartHandler,
  onDragOverHandler,
  onDropHandler,
  onDragEndHandler,
  onDragEnterHandler,
  onDragLeaveHandler,
  cardMove,
  cardDragId,
  setCardDragId,
  dragColumnId,
  setDragColumnId,
}) => {

  const [updateTitle, setUpdateTitle] = useState(false);
  const [changeTitle, setChangeTitle] = useState('');

  const onTitleChange = (e) => {
    setChangeTitle(e.currentTarget.value);
  }

  const onTitleSubmit = (e) => {
    e.preventDefault();
    updateCol(columnId, changeTitle, boardId);
    setUpdateTitle(false);
  }

  const dragOverHandler = (e) => {
    e.preventDefault();
  }

  const dragStartHandler = (e) => {
    e.stopPropagation();
    setCardDragId(JSON.parse(e.currentTarget.getAttribute('drag')));
    setDragColumnId(JSON.parse(e.currentTarget.getAttribute('col')));
  }

  const dropHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dropId = JSON.parse(e.currentTarget.id);
    if (cardDragId !== dropId) {
      const dropColumnId = JSON.parse(e.currentTarget.getAttribute('col'));
      console.log(cardDragId, dropId, dragColumnId, dropColumnId)
      cardMove(cardDragId, dropId, dragColumnId, dropColumnId, boardId);
    }
  }

  return (
    <div className={styles.boardColumn}
      draggable
      id={columnId}
      onDragStart={onDragStartHandler}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
      onDragEnd={onDragEndHandler}
      onDragEnter={onDragEnterHandler}
      onDragLeave={onDragLeaveHandler}
    >
      <div className={styles.boardColumn__header}>
        {
          updateTitle
            ? <BoardColumnForm changeTitle={changeTitle} onTitleChange={onTitleChange} handleClick={onTitleSubmit} />
            : (<>
              <h2>{title}</h2>
              <div>
                <ButtonElement children={<TiPencil />} type="button" smallFont colorBlack transparent handleClick={() => { setUpdateTitle(true) }} />
                <ButtonElement children={<MdDeleteForever />} type="button" smallFont transparent colorBlack handleClick={() => { removeCol(columnId, boardId) }} />
              </div>
            </>)
        }
      </div>
      {
        tasks.map(task => task.id
          && (
            <FilledCard
              key={task.id}
              id={task.id}
              dropPrevId={task.prevId}
              dropNextId={task.nextId}
              boardId={boardId}
              cardTitle={task.title}
              cardDesc={task.description}
              deleteCard={deleteCard}
              updateCard={updateCard}
              setNotification={setNotification}
              columnId={columnId}
              dragOverHandler={dragOverHandler}
              dragStartHandler={dragStartHandler}
              dropHandler={dropHandler}
            />
          ))
      }
      <EmptyCard createCard={createCard} columnId={columnId} boardId={boardId} setNotification={setNotification} />
    </div>
  )
}

export default BoardColumn;
