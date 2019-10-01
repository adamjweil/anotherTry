import axios from "axios";
import { showSuccessSnackbar, showErrorSnackbar } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  AUTH_ERROR,
  PROFILE_LOADED
} from "./types";

//LOAD profile
export const loadProfile = showErrorSnackbar => async dispatch => {
  try {
    const res = await axios.get("/api/profile");
    dispatch({
      type: PROFILE_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
    console.log(err);
  }
};
// Get current users Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile");
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

// Create profile
export const createProfile = ({
  firstName,
  lastName,
  handle,
  team,
  title
}) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = { firstName, lastName, handle, team, title };
  console.log(body);
  try {
    const res = await axios.post("/api/profile", body, config);
    console.log(res);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    // dispatch(getCurrentProfile());
    dispatch(showSuccessSnackbar("Profile Updated"));
  } catch (err) {
    const errors = err.repsponse.data.errors;

    if (errors) {
      errors.forEach(dispatch(showErrorSnackbar(err.msg)));
    }
  }
};

export const updateProfile = (values, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put("/api/profile", values, config);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
    dispatch(showSuccessSnackbar("Profile Updated"));
  } catch (err) {
    const errors = err.repsponse.data.errors;

    if (errors) {
      errors.forEach(dispatch(showErrorSnackbar(err.msg)));
    }
  }
};
