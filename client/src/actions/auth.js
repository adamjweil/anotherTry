import setAuthToken from "./../utils/setAuthToken";
import api from "../apis/api";
import {
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS
} from "./types";

// Load a user
export const loadUser = () => async dispatch => {};

//Register user
export const register = formValues => async dispatch => {
  const res = await api.post("/users", formValues);
  try {
    dispatch({
      type: REGISTER_SUCCESS,
      payload: formValues
    });
  } catch (err) {
    dispatch({
      type: REGISTER_FAIL,
      payload: formValues
    });
  }
  console.log(res);
};

// Login a user
export const login = formValues => async dispatch => {
  const res = await api.post("/", formValues);
  try {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: formValues
    });
  } catch (err) {
    dispatch({
      type: LOGIN_FAIL
    });
  }
};
