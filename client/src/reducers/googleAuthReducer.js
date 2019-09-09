import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIIAL_STATE = {
  isSignIn: null,
  userId: null
};

export default (state = INITIIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload };
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null };
    default:
      return state;
  }
};
