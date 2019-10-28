import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  GET_PROFILE,
  // GET_ALL_PROFILES,
  CREATE_PROFILE,
  // CLEAR_PROFILE,
  PROFILE_ERROR,
  // FETCH_PROFILE,
  FETCH_PROFILES
} from "./types";
import { push } from "react-router-redux";
import store from "../store";
import history from "../history";
import { loadUser } from "./user";

//LOAD profile
export const loadCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles/me");
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

// Fetch specific Profile
export const fetchProfileById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/profiles/user/${id}`);
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

// Fetch specific Profile
export const fetchProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles/me");
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

export const fetchProfiles = () => async dispatch => {
  const res = await axios.get("/api/profiles");
  dispatch({
    type: FETCH_PROFILES,
    payload: res.data
  });
};

// Fetch all Profiles
export const loadAllProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles");
    dispatch({
      type: FETCH_PROFILES,
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
    const res = await axios.post("/api/profiles", formData, config);
    await dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    dispatch(showSuccessSnackbar(edit ? "Profile Updated" : "Profile Created"));
    history.push("/profile");
  } catch (err) {
    console.log(err);
    debugger;
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
