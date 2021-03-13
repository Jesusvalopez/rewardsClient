import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_COUPONS_COUNT,
} from "..//constants/actionsTypes";
import * as api from "../api";

//Actions creators
export const getCoupons = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCoupons();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
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
