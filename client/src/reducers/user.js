import {
  USER_LOADED,
  GET_USERS,
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  GET_NOTIFICATION_COUNT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  firstName: "",
  lastName: "",
  isAuthenticated: null,
  loading: true,
  notification_count: 0,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case GET_USERS:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case NOTIFCATION_INCREMENT:
      state.notification_count = state.notification_count + 1;
      return {
        ...state
      };
    case NOTIFCATION_DECREMENT:
      state.notification_count = state.notification_count - 1;
      return {
        ...state
      };
    case GET_NOTIFICATION_COUNT:
      return {
        ...state
      };
    default:
      return state;
  }
}
