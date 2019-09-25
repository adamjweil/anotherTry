import axios from "axios";
import { showSuccessSnackbar, showErrorSnackbar } from "./alert";
import {
  GET_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE
  // UPDATE_PROFILE
} from "./types";

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
export const createProfile = values => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    // const body = JSON.stringify(values);

    const res = await axios.post("/api/profile", values, config);
    console.log(res);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(showSuccessSnackbar("success"));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(showErrorSnackbar(error.msg)));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const updateProfile = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await axios.put("/api/profile", formData, config);
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
