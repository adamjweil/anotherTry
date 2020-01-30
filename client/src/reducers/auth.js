import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  TOGGLE_TERMS,
  LOGOUT,
  GET_USERS,
  GET_USER,
  SIGN_IN,
  SIGN_OUT,
  GOOGLE_SIGNIN_SUCCESS,
  AUTHENTICATION_START,
  AUTHENTICATION_SUCCESS,
  AUTHENTICATION_FAILURE,
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  authLoading: false,
  user: null,
  error: null
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTHENTICATION_START: {
      return {
        ...state,
        error: null, 
        authLoading: true,
      };
    }
    case AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        error: null, 
        authLoading: false,
        token: payload.token,
      };
    }
    case AUTHENTICATION_FAILURE: {
      return {
        ...state,
        error: payload.error, 
        authLoading: false,
      };
    }
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        authLoading: false,
        user: payload
      };
    case GOOGLE_SIGNIN_SUCCESS:
      return {
        ...state,
        token: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        authLoading: false
      };
    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGOUT:
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        authLoading: false
      };
    case TOGGLE_TERMS:
      state.terms = !state.terms;
      return {
        ...state
      };
    case GET_USERS:
      return {
        ...state
      };
    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        authLoading: false
      };
    default:
      return state;
  }
};
