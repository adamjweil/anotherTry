import axios from "axios";
import { showSuccessSnackbar, showInfoSnackbar } from "./alert";
import { FETCH_TEAMS, CREATE_TEAM } from "./types";

// fetch all teams
export const fetchTeams = () => async dispatch => {
  const res = await axios.get("/api/teams");
  dispatch({
    type: FETCH_TEAMS,
    payload: res.data
  });
};

// create new team
export const createTeam = ({
  formData,
  history,
  edit = false
}) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    const res = await axios.post("/api/teams", formData, config);
    console.log(res);

    dispatch({
      type: CREATE_TEAM,
      payload: res.data
    });
    dispatch(showSuccessSnackbar(edit ? "Team Updated" : "Team Created"));
  } catch (err) {
    console.log(err);
    dispatch(showInfoSnackbar(err.message));
  }
};

export const addMember = profile => async dispatch => {};
