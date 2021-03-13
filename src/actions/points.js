import { FETCH_ALL_POINTS } from "..//constants/actionsTypes";
import * as api from "../api";

export const getMyPoints = () => async (dispatch) => {
  try {
    const { data } = await api.fetchMyPoints();
    dispatch({ type: FETCH_ALL_POINTS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
