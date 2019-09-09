import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import profile from './profile';
import googleAuth from './googleAuthReducer';

export default combineReducers({
  alert: alert,
  auth: auth,
  profile: profile,
  gauth: googleAuth

});
