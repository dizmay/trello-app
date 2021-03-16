import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectBoardUsers } from '../../selectors/boardSelectors';
import { inviteUser, getBoardUsers } from '../../actions/boards/actions';
import Board from './Board';

const BoardContainer = () => {
  const { params } = useParams()
  const [id, title] = params.split('&');
  const dispatch = useDispatch();
  const usernames = useSelector(selectBoardUsers);
  const invite = (username, boardId) => dispatch(inviteUser(username, boardId));

  useEffect(() => {
    dispatch(getBoardUsers({ boardId: id }));
  }, [id, dispatch])

  return (
    <Board id={id} title={title} invite={invite} usernames={usernames} />
  )
}

export default BoardContainer;
