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
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  GET_NOTIFICATION_COUNT,
  SIGN_IN,
  SIGN_OUT,
  ACTIVE_ITEM_TOGGLE
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
  notification_count: 0,
  activeItem: 'search'
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
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
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        ...payload,
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
        ...state,
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
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case NOTIFCATION_INCREMENT:
    state.notification_count = state.notification_count + 1;
      return {
        ...state,
      }
    case NOTIFCATION_DECREMENT:
      state.notification_count = state.notification_count - 1;
      return {
        ...state
      };
    case GET_NOTIFICATION_COUNT:
      return {
        ...state
      };
    case SIGN_IN:
      return {
        ...state,
        isAuthenticated: true,
        userId: action.payload
      };
    case SIGN_OUT:
      return {
        ...state,
        isAuthenticated: false,
        userId: null
      };
    case ACTIVE_ITEM_TOGGLE:
      return {
        ...state,
        activeItem: action.payload
      }
    default:
      return state;
  }
}
