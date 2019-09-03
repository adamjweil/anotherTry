import {
  GET_USERS,
  NOTIFCATION_INCREMENT,
  NOTIFCATION_DECREMENT,
  GET_NOTIFICATION_COUNT
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  loading: true,
  notification_count: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
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
