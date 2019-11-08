import {
  CREATE_TEAM,
  FETCH_TEAMS,
  TEAM_ERROR,
  ADD_MEMBER
} from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  team: {},
  teams: [],
  loading: true,
  error: {}
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TEAM:
      return {
        ...state,
        team: payload,
        loading: false
      };
    case FETCH_TEAMS:
      return {
        ...state,
        teams: { ..._.mapKeys(payload, "_id") }
      };
    case TEAM_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case ADD_MEMBER:
      return {
        ...state,
        ...payload,
        loading: false
      };
    default:
      return state;
  }
}
