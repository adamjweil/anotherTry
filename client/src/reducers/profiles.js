import {
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  GET_ALL_PROFILES,
  CLEAR_PROFILE,
  FETCH_PROFILES,
  FETCH_PROFILE
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
  notification_count: 0,
  submittedProfileForm: false
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        submittedProfileForm: true
      };
    case FETCH_PROFILES:
      return { ...state, ..._.mapKeys(action.payload, "_id") };
    case FETCH_PROFILE:
      return { ...state, [action.payload.id]: action.payload };
    case GET_PROFILE:
      return { ...state, ..._.mapKeys(action.payload, "ticketId") };
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
      return { ...state };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        profiles: [],
        repos: [],
        loading: false
      };
    default:
      return state;
  }
}
