import { GET_PROFILE, PROFILE_ERROR, CREATE_PROFILE, CREATE_PROFILE_FAIL } from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
}
export default function(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      }
    case CREATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      }
      case CREATE_PROFILE_FAIL:
      return {
        ...state,
        errors: payload,
        loading: false
      }
    default:
      return state;
  }

}
