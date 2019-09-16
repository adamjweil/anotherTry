import axios from "axios";
import { setAlert } from "./alert";
import setAuthToken from "../utils/setAuthToken";
import { showErrorSnackbar } from "./alert";
import {
  GET_USERS,
  AUTH_ERROR,
  USER_LOADED,
  FETCH_USER,
  FETCH_USERS,
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT
} from "./types";

// LOAD USER
export const loadUser = setAlert => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(showErrorSnackbar(error.msg)));
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
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Decrement the notification counter
export const decrementNotificationCount = () => async dispatch => {
  try {
    dispatch({
      type: NOTIFCATION_DECREMENT
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Fetch all Users
export const fetchUsers = () => async dispatch => {
  const res = await axios.get("/api/users");
  dispatch({
    type: FETCH_USERS,
    payload: res.data
  });
};

// Fetch specific User
export const fetchUser = id => async dispatch => {
  const res = await axios.get(`/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
