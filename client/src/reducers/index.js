import { combineReducers } from "redux";
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";
import user from "./user";

export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  user: user
});
