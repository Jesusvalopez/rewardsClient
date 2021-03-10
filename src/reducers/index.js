import { combineReducers } from "redux";

import coupons from "./coupons";
import auth from "./auth";

export default combineReducers({ coupons, auth });
