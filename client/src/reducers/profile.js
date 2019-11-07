import {
  GET_PROFILE,
  CREATE_PROFILE,
  UPDATE_PROFILE,
  PROFILE_ERROR,
  GET_ALL_PROFILES,
  CLEAR_PROFILE,
  FETCH_PROFILES,
  FETCH_PROFILE,
  FETCH_PROFILE_OLD
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  profile: {},
  profiles: [],
  repos: [],
  loading: true,
  error: {},
  isSaved: false
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        isSaved: true
      };
    case FETCH_PROFILES:
      return {
        ...state,
        profile: state.profile,
        profiles: { ..._.mapKeys(payload, "_id") },
        loading: false
      };
    case FETCH_PROFILE_OLD:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_PROFILE:
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        isSaved: true
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
        isSaved: true
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case GET_ALL_PROFILES:
      return { ...state, loading: false };
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
