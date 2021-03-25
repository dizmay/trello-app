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
  order,
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
  onDropHandler
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

  return (
    <div className={styles.boardColumn}
      draggable
      id={columnId}
      order={order}
      onDragStart={onDragStartHandler}
      onDragOver={onDragOverHandler}
      onDrop={onDropHandler}
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
              deleteCard={deleteCard}
              updateCard={updateCard}
              setNotification={setNotification}
            />
          ))
      }
      <EmptyCard createCard={createCard} columnId={columnId} boardId={boardId} setNotification={setNotification} />
    </div>
  )
}

export default BoardColumn;
