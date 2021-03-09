import { FETCH_ALL, CREATE, UPDATE, DELETE } from "..//constants/actionsTypes";

export default (coupons = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
      break;
    case CREATE:
      return [...coupons, action.payload];
      break;
    case UPDATE:
      return coupons.map((coupon) =>
        coupon._id === action.payload._id ? action.payload : coupon
      );
      break;
    case DELETE:
      return coupons.filter((coupon) => coupon._id !== action.payload);
      break;
    default:
      return coupons;
  }
};
