import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_COUPONS_COUNT,
  FETCH_EXCHANGE_COUPONS,
  UPDATE_TOTAL_POINTS,
  FETCH_ALL_POINTS_TOP,
  FETCH_ALL_COUPONS_USED,
  FETCH_ALL_COUPONS_EXPIRED,
  FETCH_TOKENS_COUNT,
} from "..//constants/actionsTypes";
import * as api from "../api";
import { getMyPoints } from "./points";

//Actions creators
export const getCoupons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCoupons();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getExchangeCoupons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExchangeCoupons();
    console.log(data);
    dispatch({ type: FETCH_EXCHANGE_COUPONS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const exchangeCoupon = (exchangeCoupon) => async (dispatch) => {
  try {
    const { data } = await api.exchangeCoupon(exchangeCoupon);
    console.log(data);
    dispatch({ type: UPDATE_TOTAL_POINTS, payload: data });
    dispatch(getMyCouponsCount());
    dispatch(getMyPoints());
    //dispatch({ type: FETCH_ALL_POINTS_TOP, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getMyCouponsCount = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMyCouponsCount();
    console.log(data);
    dispatch({ type: FETCH_COUPONS_COUNT, payload: data.coupons });
    dispatch({ type: FETCH_TOKENS_COUNT, payload: data.tokens });
  } catch (error) {
    console.log(error.message);
  }
};
export const getMyCoupons = (state) => async (dispatch) => {
  try {
    const { data } = await api.fetchMyCoupons(state);
    //console.log(data);

    switch (state) {
      case "active": {
        dispatch({ type: FETCH_ALL, payload: data });
        break;
      }
      case "used": {
        dispatch({ type: FETCH_ALL_COUPONS_USED, payload: data });
        break;
      }
      case "expired": {
        dispatch({ type: FETCH_ALL_COUPONS_EXPIRED, payload: data });
        break;
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const createCoupon = (coupon) => async (dispatch) => {
  try {
    const { data } = await api.createCoupon(coupon);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updateCoupon = (id, coupon) => async (dispatch) => {
  try {
    const { data } = await api.updateCoupon(id, coupon);
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteCoupon = (id) => async (dispatch) => {
  try {
    await api.deleteCoupon(id);
    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error);
  }
};
