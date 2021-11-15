import React from 'react';
import { FaCommentDots } from 'react-icons/fa';
import { RiSendPlaneFill } from 'react-icons/ri';
import CommentElement from './CommentElement/CommentElement';
import styles from './ModalCommentSection.module.scss';

const ModalCommentSection = ({ comments, value, onValueChange, handleClick }) => {
  return (
    <div className={styles.comments__container}>
      <div className={styles.comments__title}>
        <FaCommentDots />
        <h2>Comments:</h2>
      </div>
      <div className={styles.comments__func}>
        <textarea
          name="comments"
          id="comments"
          cols="50"
          rows="3"
          placeholder="Write a comment..."
          className={styles.comments__text}
          value={value}
          onChange={onValueChange}
        />
        <button onClick={handleClick}>
          <RiSendPlaneFill />
        </button>
      </div>
      <div className={styles.comments__section}>
        {
          comments.map(comment => <CommentElement key={comment.id} username={comment.username} text={comment.text} />)
        }
      </div>
    </div>
  )
}

export default ModalCommentSection;
