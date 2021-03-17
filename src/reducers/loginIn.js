import { LOGIN_IN } from "..//constants/actionsTypes";

export default (loginIn = false, action) => {
  switch (action.type) {
    case LOGIN_IN:
      return action.payload;
      break;
    default:
      return loginIn;
  }
};
