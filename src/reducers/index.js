import { combineReducers } from "redux";

import coupons from "./coupons";
import auth from "./auth";
import points from "./points";
import couponsCount from "./couponsCount";

export default combineReducers({ coupons, auth, points, couponsCount });
