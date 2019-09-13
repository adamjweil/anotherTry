import { FETCH_USERS, FETCH_USER } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  user: {},
  users: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_USER:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return {
        ...state
      };
  }
};
