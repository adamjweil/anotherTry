import { SET_TAB, TAB_ERROR } from "./types";

export const setActiveTab = name => async dispatch => {
  try {
    dispatch({
      type: SET_TAB,
      payload: name
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TAB_ERROR,
      payload: err
    });
  }
};
