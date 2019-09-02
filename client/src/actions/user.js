import axios from 'axios';
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import { GET_USERS, AUTH_ERROR, USER_LOADED, NOTIFCATION_INCREMENT, NOTIFCATION_DECREMENT } from './types'


// Load all Users
export const loadAllUsers = () => async dispatch => {
  try {
    const res = await axios.get('/');
    dispatch({
      type: GET_USERS,
      payload: res.data
    });
  }  catch (err) {
    const errors = err.response.res.errors;
      if(errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
    dispatch({
      type: AUTH_ERROR
    });
  }
}

// LOAD USER
export const loadUser = (setAlert) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
      if(errors) {
        errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
      }
    dispatch({
      type: AUTH_ERROR
    });
  }
};


// Increment the notification counter
export const incrementNotificationCount = () => async dispatch => {
  try {
    dispatch({
      type: NOTIFCATION_INCREMENT
    });
  } catch(err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Decrement the notification counter
export const decrementNotificationCount = () => async dispatch => {
  try {
    dispatch({
      type: NOTIFCATION_DECREMENT
    });
  } catch(err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}
