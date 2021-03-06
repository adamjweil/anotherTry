import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  CREATE_PROFILE,
  PROFILE_ERROR,
  FETCH_PROFILES,
  FETCH_PROFILE,
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS
} from "./types";

// Fetch current Profile
export const fetchProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({ type: FETCH_PROFILE_START });
    dispatch({
      type: FETCH_PROFILE,
      profile: res.data,
      // payload: res.data
    });
    dispatch({ type: FETCH_PROFILE_SUCCESS })
  } catch (err) {
    console.log(err);
    dispatch({
      type: PROFILE_ERROR,
      payload: err
    });
  }
};

// Fetch specific Profile
export const fetchProfileById = id => async dispatch => {
  try {
    const res = await axios.get(`/api/profile/user/${id}`);
    dispatch({ type: FETCH_PROFILE_START });
    dispatch({
      type: FETCH_PROFILE,
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
  const res = await axios.get("/api/profile");
  dispatch({ type: FETCH_PROFILE_START });
  dispatch({
    type: FETCH_PROFILES,
    payload: res.data
  });
};

// Fetch all Profiles
export const loadAllProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile");
    dispatch({ type: FETCH_PROFILE_START });
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
    const res = await axios.post("/api/profile", formData, config);
    dispatch({ type: FETCH_PROFILE_START });
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    dispatch(showSuccessSnackbar(edit ? "Profile Updated" : "Profile Created"));
    if (!edit) {
      history.push("/profile");
    }
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err
    });
  }
};

export const fetchProfileSuccess = dispatch => {
  dispatch({
    type: FETCH_PROFILE_SUCCESS
  });
};
