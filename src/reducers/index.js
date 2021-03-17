import { combineReducers } from "redux";

import coupons from "./coupons";
import auth from "./auth";
import points from "./points";
import couponsCount from "./couponsCount";
import exchangeCoupons from "./exchangeCoupons";

const rootReducer = combineReducers({
  coupons,
  auth,
  points,
  couponsCount,
  exchangeCoupons,
});

export default (state, action) =>
  rootReducer(action.type === "LOGOUT" ? undefined : state, action);
