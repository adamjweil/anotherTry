import {
  GET_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE,
  CREATE_PROFILE_FAIL,
  CLEAR_PROFILE,
  GET_CURRENT_PROFILE
} from "../actions/types";

const INITIAL_STATE = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export default function(state = INITIAL_STATE, action) {
  // const { type, payload } = action;
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        errors: action.payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        repos: [],
        loading: false
      };
    case GET_CURRENT_PROFILE:
      return {
        ...state
      };
    default:
      return state;
  }
}
