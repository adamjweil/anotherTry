import axios from "axios";
// import { browserHistory } from "react-router";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  CLEAR_PROFILE,
  TOGGLE_TERMS,
  SIGN_IN,
  SIGN_OUT,
  AUTH_ERROR
} from "./types";
import { setAlert } from "./alert";
import { push } from "react-router-redux";
import setAuthToken from "../utils/setAuthToken";
import store from "./../store";
import { loadUser } from "./user";

// REGISTER USER
export const register = ({ email, terms, password }) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, terms, password });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    console.log({ err });
    const errors = err.response.data.errors;
    if (errors) {
      console.log(errors);
      errors.forEach(error => dispatch(setAlert(err.msg, "danger")));
    }
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// LOGIN USER
export const login = (email, password) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const body = JSON.stringify({ email, password });
    const res = await axios.post("/api/auth", body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    dispatch(setAlert(err.message, "danger"));
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const toggleCheck = terms => async dispatch => {
  dispatch({
    type: TOGGLE_TERMS,
    payload: terms
  });
};

// LOUTOUT A USER / CLEAR PROFILE
export const logout = () => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch({
    type: LOGOUT
  });
  store.dispatch(push("/"));
};

// Sign in w GoogleAuth
export const signIn = userId => async dispatch => {
  try {
    dispatch({
      type: SIGN_IN,
      payload: userId
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
