import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import user from "./user";
import ticket from "./ticket";
import directory from "./directory";
import team from "./team";

export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  user: user,
  ticket: ticket,
  directory: directory,
  team: team
});
