import axios from "axios";
// import { browserHistory } from "react-router";
import {
  SIGN_IN,
  SIGN_OUT,
  AUTH_ERROR
} from "./types";


// Sign in w GoogleAuth
export const signIn = userId => async dispatch => {
  try {
    dispatch({
      type: SIGN_IN,
      payload: userId
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};
