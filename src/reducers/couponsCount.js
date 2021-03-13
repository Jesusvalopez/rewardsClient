import { FETCH_COUPONS_COUNT } from "..//constants/actionsTypes";

export default (couponsCount = [], action) => {
  switch (action.type) {
    case FETCH_COUPONS_COUNT:
      return action.payload;
      break;
    default:
      return couponsCount;
  }
};
