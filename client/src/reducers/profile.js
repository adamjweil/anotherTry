import {
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  GET_ALL_PROFILES,
  CLEAR_PROFILE
} from "../actions/types";

const INITIAL_STATE = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
  notification_count: 0
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
    case CREATE_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case GET_ALL_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
