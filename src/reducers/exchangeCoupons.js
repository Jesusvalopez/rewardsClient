import { FETCH_EXCHANGE_COUPONS } from "..//constants/actionsTypes";

export default (exchangeCoupons = [], action) => {
  switch (action.type) {
    case FETCH_EXCHANGE_COUPONS:
      return action.payload;
      break;
    default:
      return exchangeCoupons;
  }
};
