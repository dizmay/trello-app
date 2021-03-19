import types from './types';

export const getUserNotifications = () => ({
  type: types.GET_USER_NOTIFICATIONS,
})

export const getUserNotificationsSuccess = (response) => ({
  type: types.GET_USER_NOTIFICATIONS_SUCCESS,
  payload: response
})

export const getUserNotificationsFailed = () => ({
  type: types.GET_USER_NOTIFICATIONS_FAILED,
})

export const replyToUserNotification = () => ({
  type: types.REPLY_TO_NOTIFICATION
})

export const replyToUserNotificationSuccess = () => ({
  type: types.REPLY_TO_NOTIFICATION_SUCCESS
})

export const replyToUserNotificationFailed = () => ({
  type: types.REPLY_TO_NOTIFICATION_FAILED
})
