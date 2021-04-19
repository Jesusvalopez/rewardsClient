import {
  AUTH,
  LOGOUT,
  AUTH_ERROR,
  AUTH_CLEAN_ERRORS,
} from "..//constants/actionsTypes";

export default (state = { authData: null, authError: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", action.payload);
      return { ...state, authData: action.payload };
      break;
    case AUTH_ERROR:
      return { ...state, authError: action.payload };
      break;
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
      break;
    case AUTH_CLEAN_ERRORS:
      return { ...state, authError: null };
      break;

    default:
      return state;
  }
};
