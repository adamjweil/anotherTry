import { CREATE_TEAM, FETCH_TEAMS, TEAM_ERROR } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  team: null,
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
        team: payload
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
    default:
      return state;
  }
}
