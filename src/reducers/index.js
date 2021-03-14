import { combineReducers } from "redux";

import coupons from "./coupons";
import auth from "./auth";
import points from "./points";
import couponsCount from "./couponsCount";
import exchangeCoupons from "./exchangeCoupons";

export default combineReducers({
  coupons,
  auth,
  points,
  couponsCount,
  exchangeCoupons,
});
