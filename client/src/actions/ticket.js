import axios from "axios";
import { showSuccessSnackbar, showInfoSnackbar } from "./alert";
import { CREATE_TICKET, GET_TICKETS, TICKET_ERROR } from "./types";
import { routerMiddleware, push } from "react-router-redux";
import store from "../store";
import history from "../history";

// LOAD all tickets
export const loadTickets = () => async dispatch => {
  try {
    const res = await axios.get("/api/tickets");
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

//
export const fetchTickets = () => async dispatch => {
  try {
    const res = await axios.get("/api/tickets");
    dispatch({
      type: GET_TICKETS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: TICKET_ERROR,
      payload: { err }
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
    const res = await axios.post("/api/tickets", formData, config);
    console.log(res);
    dispatch({
      type: CREATE_TICKET,
      payload: res.data
    });
    dispatch(loadTickets());
    dispatch(showSuccessSnackbar(edit ? "Ticket Updated" : "Ticket Created"));
  } catch (err) {
    dispatch(showInfoSnackbar(err.msg));
    dispatch({
      type: TICKET_ERROR,
      payload: err.msg
    });
  }
};
