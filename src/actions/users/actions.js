import { usersAPI } from '../../API';
import {
  getUserNotifications,
  getUserNotificationsSuccess,
  getUserNotificationsFailed,
  replyToUserNotification,
  replyToUserNotificationSuccess,
  replyToUserNotificationFailed,
} from './actionCreators';

export const getNotifications = () => async (dispatch) => {
  try {
    dispatch(getUserNotifications());
    const response = await usersAPI.getUserNotifications();
    dispatch(getUserNotificationsSuccess(response.data));
  }
  catch (error) {
    dispatch(getUserNotificationsFailed())
  }
}

export const replyToNotification = (invId, isAccepted) => async (dispatch) => {
  try {
    dispatch(replyToUserNotification());
    await usersAPI.replyToUserNotification(invId, isAccepted);
    dispatch(getUserNotifications());
    const notifications = await usersAPI.getUserNotifications();
    dispatch(getUserNotificationsSuccess(notifications.data))
    dispatch(replyToUserNotificationSuccess());
  }
  catch (error) {
    dispatch(replyToUserNotificationFailed());
  }
}
