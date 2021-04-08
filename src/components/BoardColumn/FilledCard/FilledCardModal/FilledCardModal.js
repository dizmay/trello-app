import React, { useState } from 'react';
import { FaClipboardList } from 'react-icons/fa';
import { TiThMenu, TiPencil } from 'react-icons/ti';
import { MdDeleteForever, MdRefresh } from 'react-icons/md';
import ModalButtons from './ModalButtons/ModalButtons';
import FilledCardMembers from '../FilledCardMembers/FilledCardMembers';
import ModalForm from './ModalForm/ModalForm';
import ModalCommentSection from './ModalCommentSection/ModalCommentSection';
import styles from './FilledCardModal.module.scss';

const FilledCardModal = ({
  modalRef,
  cardTitle,
  cardDesc,
  columnTitle,
  usernames,
  assigned,
  assignUserToTask,
  cancelUserAssignment,
  id,
  columnId,
  boardId,
  removeCard,
  updateCard,
  comments,
  newComment,
  userId,
  refresh,
}) => {

  const [title, setTitle] = useState(cardTitle);
  const [titleEdit, setTitleEdit] = useState(false);

  const [description, setDescription] = useState(cardDesc);
  const [descriptionEdit, setDescriptionEdit] = useState(false);

  const [comment, setComment] = useState('');

  const stopClick = (e) => {
    e.stopPropagation()
  }

  const stopDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const onTitleChange = (e) => {
    setTitle(e.currentTarget.value);
  }

  const editTitle = (e) => {
    e.stopPropagation();
    setTitleEdit(true);
  }

  const editDescription = (e) => {
    e.stopPropagation();
    setDescriptionEdit(true);
  }

  const onDescriptionChange = (e) => {
    setDescription(e.currentTarget.value);
  }

  const onCommentChange = (e) => {
    setComment(e.currentTarget.value);
  }

  const createNewComment = () => {
    if (comment.length > 1) {
      newComment(comment, userId, id, boardId, columnId);
      setComment('');
    }
  }

  const refreshComments = () => {
    refresh(boardId);
  }

  const onCardUpdate = (e) => {
    e.preventDefault();
    updateCard(id, title, description, boardId, false);
    setTitleEdit(false);
    setDescriptionEdit(false);
  }

  return (
    <div className={styles.modal__container} draggable onClick={stopClick} onDragStart={stopDrag}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modal__info}>
          <div className={styles.info__container}>
            <div className={styles.modal__title}>
              <FaClipboardList />
              {
                titleEdit
                  ? <ModalForm changeValue={title} onValueChange={onTitleChange} onFormSubmit={onCardUpdate} />
                  : <h2>{cardTitle}</h2>
              }
            </div>
            <span>{`in list "${columnTitle}"`}</span>
          </div>
          <div className={styles.modal__assigned}>
            <FilledCardMembers
              usernames={usernames}
              assigned={assigned}
              assignUserToTask={assignUserToTask}
              cancelUserAssignment={cancelUserAssignment}
              id={id}
              boardId={boardId}
              columnId={columnId}
            />
          </div>
          <div className={styles.modal__description}>
            <h3>Description:</h3>
            {
              descriptionEdit
                ? <ModalForm changeValue={description} onValueChange={onDescriptionChange} onFormSubmit={onCardUpdate} />
                : <p>{cardDesc}</p>
            }
          </div>
          <ModalCommentSection comments={comments} value={comment} onValueChange={onCommentChange} handleClick={createNewComment} />
        </div>
        <div className={styles.modal__menu}>
          <div className={styles.menu__title}>
            <TiThMenu />
            <h3>Menu</h3>
          </div>
          <div className={styles.menu__buttons}>
            <ModalButtons icon={<TiPencil />} text={'Change title'} handleClick={editTitle} />
            <ModalButtons icon={<TiPencil />} text={'Change description'} handleClick={editDescription} />
            <ModalButtons icon={<MdDeleteForever />} text={'Delete card'} handleClick={removeCard} />
            <br />
            <ModalButtons icon={<MdRefresh />} text={'Refresh Info'} handleClick={refreshComments} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FilledCardModal;
