import axios from "axios";
import {
  LOGIN_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_FAIL,
  USER_LOADED,
  LOGOUT,
  CLEAR_PROFILE,
  TOGGLE_TERMS,
  SIGN_OUT,
  AUTH_ERROR,
  GOOGLE_SIGNIN_SUCCESS
} from "./types";
import setAuthToken from "../utils/setAuthToken";
import {
  // showSuccessSnackbar,
  // showErrorSnackbar,
  // showInfoSnackbar,
  showSnackbar
} from "./alert";
import { fetchProfile } from "./profile";
import { push } from "react-router-redux";
import store from "../store";

//Load User
export const loadUser = (history, showErrorSnackbar) => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get("/api/auth");
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
    dispatch(fetchProfile());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// REGISTER USER
export const register = ({
  email,
  terms,
  password,
  username
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, username, terms, password });

  try {
    const res = await axios.post("/api/users", body, config);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    store.dispatch(push("/profile"));
    dispatch(loadUser());
    dispatch(showSnackbar("Successfully Registered!", "success"));
  } catch (err) {
    dispatch(showSnackbar(err.msg, "error"));
    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// LOGIN USER
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/auth", body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
    dispatch(showSnackbar("Successfully logged in", "success"));
  } catch (err) {
    dispatch(showSnackbar(err.msg, "error"));
    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Toggle the T&C checkbox
export const toggleCheck = terms => dispatch =>
  dispatch({
    type: TOGGLE_TERMS,
    payload: terms
  });

// LOUTOUT A USER / CLEAR PROFILE
export const logout = () => async dispatch => {
  dispatch({
    type: CLEAR_PROFILE
  });
  dispatch(showSnackbar("Successfully logged out", "info"));
  dispatch({
    type: LOGOUT
  });
};

// Sign in w GoogleAuth
export const signIn = () => async dispatch => {
  try {
    dispatch({
      type: GOOGLE_SIGNIN_SUCCESS
    });
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    dispatch(loadUser());
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Sign Out with GoogleAuth
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
