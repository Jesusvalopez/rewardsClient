import { FETCH_ALL_POINTS } from "..//constants/actionsTypes";

export default (points = [], action) => {
  switch (action.type) {
    case FETCH_ALL_POINTS:
      return action.payload;
      break;
    default:
      return points;
  }
};
