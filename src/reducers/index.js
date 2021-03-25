import { combineReducers } from "redux";

import coupons from "./coupons";
import auth from "./auth";
import points from "./points";
import couponsCount from "./couponsCount";
import exchangeCoupons from "./exchangeCoupons";
import loginIn from "./loginIn";
import wheelData from "./wheelFortune";
import tokensCount from "./tokensCount";

const rootReducer = combineReducers({
  coupons,
  auth,
  points,
  couponsCount,
  exchangeCoupons,
  loginIn,
  wheelData,
  tokensCount,
});

export default (state, action) =>
  rootReducer(action.type === "LOGOUT" ? undefined : state, action);
