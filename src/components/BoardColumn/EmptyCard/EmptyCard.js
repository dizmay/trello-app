import React from 'react';
import ButtonElement from '../../ButtonElement/ButtonElement';
import { GrAdd } from 'react-icons/gr';
import styles from './EmptyCard.module.scss';

const EmptyCard = () => {
  return (
    <div className={styles.boardColumn__func}>
      <ButtonElement children={<GrAdd />} type="button" transparent colorBlack />
      <span>Add another card</span>
    </div>
  )
}

export default EmptyCard;
