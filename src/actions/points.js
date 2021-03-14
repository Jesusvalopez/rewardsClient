import {
  FETCH_ALL_POINTS,
  FETCH_ALL_POINTS_TOP,
} from "..//constants/actionsTypes";
import * as api from "../api";

export const getMyPoints = (page) => async (dispatch) => {
  try {
    const { data } = await api.fetchMyPoints(page);

    if (page) {
      dispatch({ type: FETCH_ALL_POINTS, payload: data });
    } else {
      dispatch({ type: FETCH_ALL_POINTS_TOP, payload: data });
    }
  } catch (error) {
    console.log(error.message);
  }
};
