import React from "react";
import moment from "moment";
import { useSelector } from "react-redux";
import { formatedValue } from "../../helpers/formats";
const PointsHistory = () => {
  const points = useSelector((state) => state.points);

  return (
    <>
      {points.map((point) => (
        <div
          key={point._id}
          className="flex justify-center px-5 py-2 border-b border-gray-300"
        >
          <div
            className={
              point.value > 0
                ? "text-green-500 m-2  font-bold w-20"
                : "text-red-500 m-2  font-bold w-20"
            }
          >
            {formatedValue(point.value)}
          </div>
          <div className="flex-1 m-2 font-bold">{point.description}</div>
          <div className="m-2">
            {moment(point.createdAt).format("DD/MM/YYYY")}
          </div>
        </div>
      ))}
    </>
  );
};

export default PointsHistory;
