import uuid from "uuid";
import {
  SET_ALERT,
  REMOVE_ALERT,
  SNACKBAR_SUCCESS,
  SNACKBAR_ERROR,
  SNACKBAR_INFO,
  SNACKBAR_CLEAR
} from "./types";

export const setAlert = (msg, alertType, timeout = 5000) => dispatch => {
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

export const showSuccessSnackbar = (message, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({ type: SNACKBAR_SUCCESS, payload: { message, id } });
};

export const showErrorSnackbar = (message, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({ type: SNACKBAR_ERROR, payload: { message, id } });
};

export const showInfoSnackbar = (message, timeout = 5000) => dispatch => {
  const id = uuid.v4();
  dispatch({ type: SNACKBAR_INFO, payload: { message, id } });
};

export const clearSnackbar = id => dispatch => {
  dispatch({ type: REMOVE_ALERT, id });
};
