import axios from 'axios';
import { setAlert } from './alert';

import {
  GET_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE,
  CREATE_PROFILE_FAIL
} from "./types";

// Get current users Profile
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await axios.get('/api/profile/me');

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusTest, status: err.response.data }
    });
  }
};

export const createProfile = ({ team, title }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({ team, title });

  try {
    const res = await axios.post('/api/profile', body, config);
    dispatch({
      type: CREATE_PROFILE,
      payload: res
    });
  } catch (err) {
    const errors = err.response.res.error;
    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }
    dispatch({
      type: CREATE_PROFILE_FAIL
    });
  }
}
