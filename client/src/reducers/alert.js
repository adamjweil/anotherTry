import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_ALERT:
      return [...state, payload];
    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload.id);
    case "SNACKBAR_SUCCESS":
      return {
        ...state,
        id: payload.id,
        successSnackbarOpen: true,
        successSnackbarMessage: payload.message
      };
    case "SNACKBAR_ERROR":
      return {
        ...state,
        id: payload.id,
        errorSnackbarOpen: true,
        errorSnackbarMessage: payload.essage
      };
    case "SNACKBAR_INFO":
      return {
        ...state,
        id: payload.id,
        infoSnackbarOpen: true,
        infoSnackbarMessage: payload.message
      };
    case "SNACKBAR_CLEAR":
      return state.filter(alerts => alert.id !== payload.id);
    default:
      return state;
  }
}
