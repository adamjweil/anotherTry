import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_FAIL, AUTH_ERROR, LOGOUT, GET_USERS, CLEAR_PROFILE } from "./types";
import { setAlert } from './alert';
import setAuthToken from '../utils/setAuthToken';
import { loadUser } from './user';

// REGISTER USER
export const register = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post('/api/users', body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
  } catch (err) {
      const errors = err.response.res.errors;
        if(errors) {
          errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
      dispatch({
        type: REGISTER_FAIL
      });
    }
};

// LOGIN USER
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// LOUTOUT A USER / CLEAR PROFILE
export const logout = () => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
}
