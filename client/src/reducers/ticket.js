import { CREATE_TICKET, GET_TICKETS, TICKET_ERROR } from "../actions/types";

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
    case GET_TICKETS:
      return {
        ...state,
        tickets: payload,
        loading: false
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