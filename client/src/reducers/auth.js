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
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  GET_NOTIFICATION_COUNT
} from "../actions/types";

const INITIAL_STATE = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  notification_count: 0,
  isAdmin: true
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
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
        loading: false
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
        loading: false
      };
    case NOTIFCATION_INCREMENT:
      return {
        ...state,
        notification_count: state.notification_count + 1
      };
    case NOTIFCATION_DECREMENT:
      return {
        ...state,
        notification_count: state.notification_count - 1
      };
    case GET_NOTIFICATION_COUNT:
      return {
        ...state
      };
    default:
      return state;
  }
};
