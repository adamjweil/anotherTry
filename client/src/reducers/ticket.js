import { CREATE_TICKET, FETCH_TICKETS, TICKET_ERROR } from "../actions/types";
import _ from "lodash";

const INITIAL_STATE = {
  ticket: null,
  tickets: [],
  loading: true,
  error: {}
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TICKET:
      return {
        ...state,
        ticket: payload,
        loading: false
      };
    case FETCH_TICKETS:
      return {
        ...state,
        tickets: { ..._.mapKeys(payload, "_id") }
      };
    case TICKET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
