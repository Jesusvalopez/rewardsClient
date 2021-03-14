import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_COUPONS_COUNT,
  FETCH_EXCHANGE_COUPONS,
  UPDATE_TOTAL_POINTS,
  FETCH_ALL_POINTS_TOP,
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
    alert(error.response.data.message);
  }
};

export const getMyCouponsCount = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMyCouponsCount();
    console.log(data);
    dispatch({ type: FETCH_COUPONS_COUNT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getMyCoupons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMyCoupons();
    //console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
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
