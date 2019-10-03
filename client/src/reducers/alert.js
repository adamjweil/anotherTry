// import { SET_ALERT, REMOVE_ALERT } from "../actions/types";

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_ALERT":
      return [...state, action.payload];
    case "REMOVE_ALERT":
      return state.filter(alert => alert.id !== action.payload);
    case "SNACKBAR_SUCCESS":
      return {
        ...state,
        successSnackbarOpen: true,
        successSnackbarMessage: action.message
      };
    case "SNACKBAR_ERROR":
      return {
        ...state,
        errorSnackbarOpen: true,
        errorSnackbarMessage: action.message
      };
    case "SNACKBAR_INFO":
      return {
        ...state,
        infoSnackbarOpen: true,
        infoSnackbarMessage: action.message
      };
    case "SNACKBAR_CLEAR":
      return {
        ...state,
        successSnackbarOpen: false,
        errorSnackbarOpen: false,
        infoSnackbarOpen: false,
        infoSnackbarMessage: "",
        errorSnackbarMessage: "",
        successSnackbarMessage: ""
      };
    default:
      return state;
  }
}
