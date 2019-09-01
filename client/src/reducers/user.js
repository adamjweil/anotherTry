import {
  USER_LOADED,
  AUTH_ERROR,
  GET_USERS,
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  GET_NOTIFICATION_COUNT } from "../actions/types";

  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    notification_count: 0,
    user: null
  };

  export default function(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case USER_LOADED:
        return {
          ...state,
          isAuthenticated: true,
          loading: false,
          user: payload
        }
      case AUTH_ERROR:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false
        }
      case GET_USERS:
        return  {
          ...state,
          isAuthenticated: true,
          loading: false,
          users: payload
        };
      case NOTIFCATION_INCREMENT:
        return {
          ...state,
          notification_count: state.notification_count =+1,
        }
      case NOTIFCATION_INCREMENT:
        return {
          ...state,
          notification_count: state.notification_count =-1,
        }
      case GET_NOTIFICATION_COUNT:
        return {
          ...state
        }
      default:
        return state
    }
  }
