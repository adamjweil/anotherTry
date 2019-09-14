import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import users from "./users";

export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  users: users
});
