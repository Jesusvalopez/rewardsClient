import React from "react";
import { useSelector } from "react-redux";
import { formatedNumber } from "../../helpers/formats";
const ProgressBar = ({ final_value }) => {
  const progress = useSelector((state) => state.points.pointsTotal);

  let width = 0;

  if (progress > final_value) {
    width = 100;
  } else {
    width = (progress * 100) / final_value;
  }

  return (
    <>
      <div className="flex-1 text-center">
        <div className="relative">
          <div className="flex  items-center justify-between">
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-green-500">
                0
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-green-500">
                {formatedNumber(final_value)}
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
            <div
              style={{ width: width + "%" }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
