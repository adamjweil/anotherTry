import uuid from "uuid";
import {
  SET_ALERT,
  REMOVE_ALERT,
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
  SNACKBAR_INFO,
  SNACKBAR_CLEAR
} from "./types";

export const setAlert = (msg, alertType) => dispatch => {
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};

export const removeAlert = id => dispatch => {
  dispatch({
    type: REMOVE_ALERT
  });
};

export const showSuccessSnackbar = message => {
  return dispatch => {
    dispatch({ type: SNACKBAR_SUCCESS, message });
  };
};

export const showErrorSnackbar = message => {
  return dispatch => {
    dispatch({ type: SNACKBAR_ERROR, message });
  };
};

export const showInfoSnackbar = message => {
  return dispatch => {
    dispatch({ type: SNACKBAR_INFO, message });
  };
};

export const clearSnackbar = () => {
  return dispatch => {
    dispatch({ type: SNACKBAR_CLEAR });
  };
};
