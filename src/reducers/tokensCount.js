import { FETCH_TOKENS_COUNT } from "..//constants/actionsTypes";

export default (tokensCount = [], action) => {
  switch (action.type) {
    case FETCH_TOKENS_COUNT:
      return action.payload;
      break;
    default:
      return tokensCount;
  }
};
