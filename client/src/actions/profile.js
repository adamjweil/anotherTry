import axios from "axios";
import { setAlert, showSuccessSnackbar, showErrorSnackbar } from "./alert";

import { GET_PROFILE, PROFILE_ERROR, CREATE_PROFILE } from "./types";

// Get current users Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get("/api/profile/me");

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
export const createProfile = ({ formData }) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const body = JSON.stringify({ formData });

    const res = await axios.post("/api/profile", body, config);
    console.log(res);
    dispatch({
      type: CREATE_PROFILE,
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
