import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { selectBoardUsers } from '../../selectors/boardSelectors';
import { inviteUser, getBoardUsers } from '../../actions/boards/actions';
import { getUserId } from '../../selectors/authSelectors';
import Board from './Board';

const BoardContainer = () => {
  const { params } = useParams()
  const [id, title] = params.split('&');
  const usernames = useSelector(selectBoardUsers);
  const userId = useSelector(getUserId);
  const dispatch = useDispatch();
  const invite = (username, boardId, userId) => dispatch(inviteUser(username, boardId, userId));

  useEffect(() => {
    dispatch(getBoardUsers({ boardId: id }));
  }, [id, dispatch])

  return (
    <Board id={id} title={title} invite={invite} usernames={usernames} userId={userId} />
  )
}

export default BoardContainer;
