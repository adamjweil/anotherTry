import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import { CREATE_TICKET, GET_TICKETS, TICKET_ERROR } from "./types";
import { routerMiddleware, push } from "react-router-redux";
import store from "../store";
import history from "../history";

// LOAD all tickets
export const loadTickets = () => async dispatch => {
  try {
    const res = await axios.get("/api/ticket");
    console.log(res);
    dispatch({
      type: GET_TICKETS,
      payload: res
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TICKET_ERROR,
      payload: err
    });
  }
};

//
export const fetchTickets = () => async dispatch => {
  try {
    const res = await axios.get("/api/ticket");
    dispatch({
      type: GET_TICKETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: err
    });
  }
};
// CREATE a ticket
export const createTicket = ({
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
    const res = await axios.post("/api/ticket", formData, config);
    console.log(res);
    // console.log("res");
    // console.log(res);
    dispatch({
      type: CREATE_TICKET,
      payload: res.data
    });
    dispatch(showSuccessSnackbar(edit ? "Ticket Updated" : "Ticket Created"));
  } catch (err) {
    console.log(err);
    dispatch({
      type: TICKET_ERROR,
      payload: err.msg
    });
  }
};
