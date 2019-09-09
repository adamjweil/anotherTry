import {
  GET_PROFILE,
  PROFILE_ERROR,
  CREATE_PROFILE,
  CREATE_PROFILE_FAIL,
  CLEAR_PROFILE,
  GET_CURRENT_PROFILE
} from "../actions/types";

const INITIAL_STATE = {
  team: "",
  title: "",
  reportingTo: "",
  directReports: "",
  hireDate: "",
  bio: "",
  skills: [],
  githubusername: "",
  profile: null,
  profiles: [],
  repos: [],
  loading: false,
  user: null
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        ...payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case CREATE_PROFILE_FAIL:
      return {
        ...state,
        errors: payload,
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
