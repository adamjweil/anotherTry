import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { AUTH_ERROR, USER_LOADED, FETCH_USER, FETCH_USERS } from "./types";

// LOAD USER
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
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Fetch all Users
export const fetchUsers = () => async dispatch => {
  try {
    const res = await axios.get("/api/users");
    dispatch({
      type: FETCH_USERS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Fetch specific User
export const fetchUserById = id => async dispatch => {
  const res = await axios.get(`/api/users/${id}`);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
};
