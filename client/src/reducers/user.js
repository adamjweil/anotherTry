import {
  GET_USER
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  loading: true,
  notification_count: 0
};

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };



    default:
      return state;
  }
}
