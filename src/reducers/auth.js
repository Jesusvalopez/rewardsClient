import { AUTH, LOGOUT } from "..//constants/actionsTypes";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      localStorage.setItem("profile", action.payload);
      return { ...state, authData: action.payload };
      break;
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null };
      break;
    default:
      return state;
  }
};
