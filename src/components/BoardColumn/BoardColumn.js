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
  dragId,
  usernames,
  assignUserToTask,
  cancelUserAssignment,
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
    e.currentTarget.style.opacity = '0.4';
  }

  const dragEndHandler = (e) => {
    e.preventDefault();
    e.currentTarget.style.opacity = '1';
  }

  const dragEnterHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const dragEnterId = JSON.parse(e.currentTarget.getAttribute('id'));
    const side = e.currentTarget.getAttribute('side');
    console.log('BOTTOM DRAG ENTER')
    if (side === 'top' && cardDragId !== dragEnterId) {
      e.currentTarget.parentNode.style.transform = 'translateY(.75rem)';
    }
    if (side === 'bottom' && cardDragId !== dragEnterId) {
      e.currentTarget.parentNode.style.transform = 'translateY(-0.75rem)';
    }
  }

  const dragLeaveHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('BOTTOM DRAG LEAVE')
    e.currentTarget.parentNode.style.transform = 'none';
  }

  const dropHandler = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const dropId = JSON.parse(e.currentTarget.id);
    const columnIsEmpty = JSON.parse(e.currentTarget.getAttribute('col')) === null;
    const dropColumnId = columnIsEmpty ? columnId : JSON.parse(e.currentTarget.getAttribute('col'));
    const side = columnIsEmpty ? 'empty' : e.currentTarget.getAttribute('side');
    if (cardDragId !== dropId && (dragColumnId !== dropColumnId || side !== 'empty')) {
      cardMove(cardDragId, dropId, dragColumnId, dropColumnId, side, boardId);
      e.currentTarget.style.border = 'none';
    }
    e.currentTarget.parentNode.style.transform = 'none';
    setCardDragId(null);
    setDragColumnId(null);
  }

  return (
    <div className={styles.boardColumn}
      draggable
      id={columnId}
      onDragStart={onDragStartHandler}
      onDragOver={onDragOverHandler}
      onDrop={dragId ? onDropHandler : dropHandler}
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
              boardId={boardId}
              cardTitle={task.title}
              cardDesc={task.description}
              assigned={task.hasOwnProperty('assigned') ? task.assigned : {}}
              deleteCard={deleteCard}
              updateCard={updateCard}
              setNotification={setNotification}
              columnId={columnId}
              dragOverHandler={dragOverHandler}
              dragStartHandler={dragStartHandler}
              dropHandler={dropHandler}
              dragEndHandler={dragEndHandler}
              dragLeaveHandler={dragLeaveHandler}
              dragEnterHandler={dragEnterHandler}
              usernames={usernames}
              assignUserToTask={assignUserToTask}
              cancelUserAssignment={cancelUserAssignment}
            />
          ))
      }
      <EmptyCard createCard={createCard} columnId={columnId} boardId={boardId} setNotification={setNotification} />
    </div>
  )
}

export default BoardColumn;
