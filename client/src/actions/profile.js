import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  GET_PROFILE,
  GET_ALL_PROFILES,
  CREATE_PROFILE,
  CLEAR_PROFILE,
  PROFILE_ERROR,
  FETCH_PROFILE,
  FETCH_PROFILES
} from "./types";
import { push } from "react-router-redux";
import store from "../store";

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

// Fetch specific Profile
export const fetchProfile = id => async dispatch => {
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

export const fetchProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles");
    dispatch({
      type: FETCH_PROFILES,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Fetch all Profiles
export const loadAllProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profiles");
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
export const createProfile = ({ formData, edit = false }) => async dispatch => {
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
    store.dispatch(push("/profile"));
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
