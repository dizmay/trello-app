import React, { useState } from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import { MdDeleteForever } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { GiConfirmed } from 'react-icons/gi';
import { TiPencil } from 'react-icons/ti'
import styles from './BoardColumn.module.scss';

const BoardColumn = ({ title, cardTitle, removeCol, boardId, columnId }) => {
  const [updateTitle, setUpdateTitle] = useState(false);
  return (
    <div className={styles.boardColumn}>
      <div className={styles.boardColumn__header}>
        {
          updateTitle
            ? <></>
            : (<>
              <h2>{title}</h2>
              <div>
                <ButtonElement children={<TiPencil />} type="button" colorBlack transparent handleClick={() => { setUpdateTitle(true) }} />
                <ButtonElement children={<MdDeleteForever />} type="button" basicFont transparent colorBlack handleClick={() => { removeCol(columnId, boardId) }} />
              </div>
            </>)
        }

      </div>
      <div className={styles.boardColumn__card}>
        <div className={styles.card__title}>{cardTitle}</div>
        <div className={styles.card__badge}>
          <GiConfirmed />
          <span>8/23</span>
        </div>
      </div>
      <div className={styles.boardColumn__func}>
        <ButtonElement children={<GrAdd />} type="button" basicFont transparent colorBlack />
        <span>Add another card</span>
      </div>

    </div>
  )
}

export default BoardColumn;
