import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_COUPONS_COUNT,
  FETCH_ALL_COUPONS_USED,
  FETCH_ALL_COUPONS_EXPIRED,
} from "..//constants/actionsTypes";

const initialState = {
  activeCoupons: null,
  usedCoupons: null,
  expiredCoupons: null,
};

export default (coupons = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return { ...coupons, activeCoupons: action.payload };
      break;
    case FETCH_ALL_COUPONS_USED:
      return { ...coupons, usedCoupons: action.payload };
      break;
    case FETCH_ALL_COUPONS_EXPIRED:
      return { ...coupons, expiredCoupons: action.payload };
      break;
    case CREATE:
      return { ...coupons, activeCoupons: action.payload };
      break;
    case UPDATE:
      return {
        ...coupons,
        activeCoupons: coupons.map((coupon) =>
          coupon._id === action.payload._id ? action.payload : coupon
        ),
      };
      break;
    case DELETE:
      return {
        ...coupons,
        activeCoupons: coupons.filter(
          (coupon) => coupon._id !== action.payload
        ),
      };
      break;
    default:
      return coupons;
  }
};
