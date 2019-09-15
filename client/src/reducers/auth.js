import {
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
  REGISTER_FAIL,
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
  switch (action.type) {
    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload
      };
    case SIGN_OUT:
      return { ...state, isAuthenticated: false, user: null };
    case USER_LOADED:
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        isAuthenticated: true,
        loading: false
      };
    case LOGIN_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        // ...action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case AUTH_ERROR:
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
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        // ...state,
        token: null,
        isAuthenticated: false,
        loading: false
      };
    case GET_USERS:
      return {
        ...state
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
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
