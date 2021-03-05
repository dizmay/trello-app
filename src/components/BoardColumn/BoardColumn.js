import React from 'react';
import ButtonElement from '../ButtonElement/ButtonElement';
import { FiMoreHorizontal } from 'react-icons/fi';
import { GrAdd } from 'react-icons/gr';
import { GiConfirmed } from 'react-icons/gi';
import styles from './BoardColumn.module.scss';

const BoardColumn = ({ title, cardTitle }) => {
    return (
        <div className={styles.boardColumn}>
                <div className={styles.boardColumn__header}>
                    <h2>{title}</h2>
                    <ButtonElement children={<FiMoreHorizontal/>} basicSize transparent colorBlack />
                </div>
                <div className={styles.boardColumn__card}>
                    <div className={styles.card__title}>{cardTitle}</div>
                    <div className={styles.card__badge}>
                        <GiConfirmed />
                        <span>8/23</span>
                    </div>
                </div>


                <div className={styles.boardColumn__func}>
                    <ButtonElement children={<GrAdd />} basicSize transparent colorBlack />
                    <span>Add another card</span>
                </div>

            </div>
    )
}

export default BoardColumn;
