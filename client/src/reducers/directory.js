import { SET_TAB, TAB_ERROR } from "../actions/types";

const INITIAL_STATE = {
  activeTab: "employees",
  loading: true,
  error: {}
};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_TAB:
      return {
        ...state,
        activeTab: payload,
        loading: false
      };
    case TAB_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
