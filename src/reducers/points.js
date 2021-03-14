import {
  FETCH_ALL_POINTS,
  UPDATE_TOTAL_POINTS,
  FETCH_ALL_POINTS_TOP,
} from "..//constants/actionsTypes";

const initialState = { points: [], pointsTotal: 0 };

export default (points = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_POINTS:
      return {
        ...points,
        points: points.points.concat(action.payload.points),
        pointsTotal: action.payload.pointsTotal,
      };
      break;
    case FETCH_ALL_POINTS_TOP:
      return {
        ...points,
        points: action.payload.points,
        pointsTotal: action.payload.pointsTotal,
      };
      break;
    case UPDATE_TOTAL_POINTS:
      return {
        ...points,
        pointsTotal: action.payload.points,
      };
      break;
    default:
      return points;
  }
};
