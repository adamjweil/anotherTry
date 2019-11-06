import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import {
  CREATE_PROFILE,
  PROFILE_ERROR,
  FETCH_PROFILES,
  FETCH_PROFILE
} from "./types";

// Fetch current Profile
export const fetchProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");
    dispatch({
      type: FETCH_PROFILE,
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
    const res = await axios.get(`/api/profile/user/${id}`);
    console.log(res);
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
  dispatch({
    type: FETCH_PROFILES,
    payload: res.data
  });
};

// Fetch all Profiles
export const loadAllProfiles = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile");
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
    await dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    dispatch(showSuccessSnackbar(edit ? "Profile Updated" : "Profile Created"));
    history.push("/profile/me");
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};
