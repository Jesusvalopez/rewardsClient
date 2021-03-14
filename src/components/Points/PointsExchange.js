import React from "react";
import ProgressBar from "../Utils/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { exchangeCoupon } from "../../actions/coupons";

const PointsExchange = () => {
  const exchangeCoupons = useSelector((state) => state.exchangeCoupons);
  const points = useSelector((state) => state.points.pointsTotal);
  const dispatch = useDispatch();
  const shouldBeDisabled = (exchangePoints) => {
    if (points < exchangePoints) {
      //return "";
      return "disabled";
    } else {
      return "";
    }
  };

  const shouldBeDisabledClasses = (exchangePoints) => {
    if (points < exchangePoints) {
      return "opacity-50 cursor-not-allowed";
    } else {
      return "";
    }
  };

  const onExchange = (toExchangeId) => {
    dispatch(exchangeCoupon({ id: toExchangeId }));
  };

  //opacity-50 cursor-not-allowed

  return (
    <>
      <div className="h-2/3 relative flex flex-col min-w-0 break-words bg-white lg:w-3/5 mb-6 shadow-xl rounded-lg mt-0 m-5">
        <div className="mt-4 mb-2 mx-4 text-lg font-bold">Canjear puntos</div>
        <div className="mt-2 py-3 border-t border-gray-300 px-4">
          {exchangeCoupons.length > 0
            ? exchangeCoupons.map((exchangeCoupon) => (
                <div
                  key={exchangeCoupon._id}
                  className="flex justify-center mb-2  pt-3 border-b border-gray-300"
                >
                  <div className="py-2 font-bold w-32">
                    {exchangeCoupon.name}
                  </div>
                  <ProgressBar
                    final_value={exchangeCoupon.pointsToExchange}
                  ></ProgressBar>
                  <div className="mx-2">
                    <button
                      className={
                        "btn btn-primary font-bold " +
                        shouldBeDisabledClasses(exchangeCoupon.pointsToExchange)
                      }
                      disabled={shouldBeDisabled(
                        exchangeCoupon.pointsToExchange
                      )}
                      onClick={() => onExchange(exchangeCoupon._id)}
                    >
                      Canjear
                    </button>
                  </div>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default PointsExchange;