import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { replyToNotification } from '../../actions/users/actions';
import { selectNotifications, selectIsLoading } from '../../selectors/users';
import Notifications from './Notifications';

const NotificationsContainer = () => {
  const userNotifications = useSelector(selectNotifications);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const reply = (invId, isAccepted) => dispatch(replyToNotification(invId, isAccepted));

  return (
    <Notifications userNotifications={userNotifications} isLoading={isLoading} reply={reply} />
  )
}

export default NotificationsContainer;
