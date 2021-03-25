import {
  FETCH_WHEEL_DATA,
  FETCH_WHEEL_PRIZE,
} from "..//constants/actionsTypes";
import * as api from "../api";

export const rollWheel = (commune) => async (dispatch) => {
  try {
    const { data } = await api.fetchWheelPrize();

    if (commune) {
      await api.updateUserCommune(commune);

      const userProfile = JSON.parse(localStorage.getItem("profile"));
      userProfile.result.commune = commune;
      localStorage.setItem("profile", JSON.stringify(userProfile));
    }

    dispatch({ type: FETCH_WHEEL_PRIZE, payload: data });
    dispatch({ type: "WHEEL_START", payload: true });
  } catch (error) {
    console.log(error.message);
  }
};
export const getWheelData = () => async (dispatch) => {
  try {
    const { data } = await api.fetchWheelData();

    dispatch({ type: FETCH_WHEEL_DATA, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
