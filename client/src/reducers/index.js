import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profiles from "./profiles";
import users from "./users";
import ticket from "./ticket";

export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profiles,
  users: users,
  ticket: ticket
});
