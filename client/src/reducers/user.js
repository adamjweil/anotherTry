import { FETCH_USERS, FETCH_USER } from "../actions/types";

const INITIAL_STATE = {
  user: null,
  users: [],
  notification_count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case FETCH_USER:
      return { ...state, users: action.payload };
    default:
      return {
        ...state
      };
  }
};
