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
export const createProfile = (
  formData,
  history,
  edit = false
) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const res = await axios.post("/api/profile", formData, config);
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    dispatch(getCurrentProfile());

    dispatch(
      showSuccessSnackbar(
        edit ? "Profile Update" : "Profile Created",
        "success"
      )
    );

    // if (!edit) {
    //   history.push("/dashboard");
    // }
  } catch (err) {
    console.log(err);
    const errors = err.data;

    if (errors) {
      errors.forEach(error => dispatch(showErrorSnackbar(error.msg)));
    }
  }
};
