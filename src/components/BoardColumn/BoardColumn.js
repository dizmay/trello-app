import React, { useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import { MdDeleteForever } from 'react-icons/md';
import { TiPencil } from 'react-icons/ti'
import BoardColumnForm from './BoardColumnForm/BoardColumnForm';
import EmptyCard from './EmptyCard/EmptyCard';
import FilledCard from './FilledCard/FilledCard';
import styles from './BoardColumn.module.scss';

const BoardColumn = ({ title, cardTitle, removeCol, boardId, columnId, updateCol }) => {
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
    <div className={styles.boardColumn}>
      <div className={styles.boardColumn__header}>
        {
          updateTitle
            ? <BoardColumnForm changeTitle={changeTitle} onTitleChange={onTitleChange} handleClick={onTitleSubmit} />
            : (<>
              <h2>{title}</h2>
              <div>
                <ButtonElement children={<TiPencil />} type="button" colorBlack transparent handleClick={() => { setUpdateTitle(true) }} />
                <ButtonElement children={<MdDeleteForever />} type="button" basicFont transparent colorBlack handleClick={() => { removeCol(columnId, boardId) }} />
              </div>
            </>)
        }

      </div>
      <FilledCard cardTitle={cardTitle} />
      <EmptyCard />
    </div>
  )
}

export default BoardColumn;
