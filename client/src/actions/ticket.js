import axios from "axios";
import { showSuccessSnackbar } from "./alert";
import { CREATE_TICKET, GET_TICKETS, TICKET_ERROR } from "./types";

// LOAD all tickets
export const loadTickets = () => async dispatch => {
  try {
    const res = await axios.get("/api/ticket");
    console.log(res);
    dispatch({
      type: GET_TICKETS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TICKET_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// CREATE a ticket
export const createTicket = ({ formData, edit = false }) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "applicsation/json"
      }
    };
    const res = await axios.post("/api/ticket", formData, config);
    dispatch({
      type: CREATE_TICKET,
      payload: res.data
    });
    dispatch(loadTickets());
    dispatch(showSuccessSnackbar(edit ? "Ticket Updated" : "Ticket Created"));
  } catch (err) {
    console.log(err);
  }
};
