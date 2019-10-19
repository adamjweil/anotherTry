import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  CREATE_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR
} from "./types";
import { routerMiddleware, push } from "react-router-redux";
import store from "../store";
import history from "../history";
//LOAD profile
export const loadCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    console.log(res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const loadProfileById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${id}`);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const getAllProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  try {
    const res = await axios.get("/api/profile");
    dispatch({
      type: GET_ALL_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
// Create profile
export const createProfile = ({
  formData,
  history,
  edit = false
}) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    history.push("/profile");

    dispatch(showSuccessSnackbar(edit ? "Profile Updated" : "Profile Created"));
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach(error => dispatch(showSuccessSnackbar(error.msg)));
    }
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
