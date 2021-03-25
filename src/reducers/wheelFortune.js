import {
  FETCH_WHEEL_DATA,
  FETCH_WHEEL_PRIZE,
} from "..//constants/actionsTypes";

const initialState = {
  wheel: [],
  winner: null,
  finished: false,
  start: false,
  mustSpin: false,
};

export default (wheelData = initialState, action) => {
  switch (action.type) {
    case FETCH_WHEEL_DATA:
      return { ...wheelData, wheel: action.payload.wheel };
      break;
    case FETCH_WHEEL_PRIZE:
      return { ...wheelData, winner: action.payload.winner };
      break;
    case "WHEEL_FINISHED":
      return {
        ...wheelData,
        finished: action.payload,
        winner: null,
        start: false,
      };
      break;
    case "WHEEL_START":
      return { ...wheelData, start: true, mustSpin: true };
      break;
    default:
      return wheelData;
  }
};
