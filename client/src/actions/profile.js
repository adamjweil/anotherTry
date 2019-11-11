import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  CREATE_PROFILE,
  PROFILE_ERROR,
  FETCH_PROFILES,
  FETCH_PROFILE,
  FETCH_PROFILE_START,
  ADD_MEMBER,
  FETCH_PROFILE_SUCCESS
} from "./types";

// Fetch current Profile
export const fetchProfile = () => async dispatch => {
  try {
    dispatch({ type: FETCH_PROFILE_START });
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: FETCH_PROFILE,
      payload: res.data
    });
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
    dispatch({ type: FETCH_PROFILE_START });
    const res = await axios.get(`/api/profile/${id}`);
    dispatch({
      type: FETCH_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: err
    });
  }
};

export const fetchProfiles = () => async dispatch => {
  dispatch({ type: FETCH_PROFILE_START });
  const res = await axios.get("/api/profile");
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
    dispatch({ type: FETCH_PROFILE_START });
    const res = await axios.post("/api/profile", formData, config);
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
