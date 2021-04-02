import React, { useEffect, useState } from "react";
import ProgressBar from "../Utils/ProgressBar";
import { useSelector, useDispatch } from "react-redux";
import { exchangeCoupon } from "../../actions/coupons";
import ContentLoader from "react-content-loader";
import { getExchangeCoupons } from "../../actions/coupons";
import ConfirmModal from "../Utils/ConfirmModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CouponsExchangeLoader = () => (
  <ContentLoader width={"100%"} height={200}>
    <rect x="1%" y="1%" rx="5" ry="5" width="100%" height="30%" />
    <rect x="1%" y="35%" rx="5" ry="5" width="100%" height="30%" />
    <rect x="1%" y="70%" rx="5" ry="5" width="100%" height="30%" />
  </ContentLoader>
);

const PointsExchange = () => {
  const exchangeCoupons = useSelector((state) => state.exchangeCoupons);
  const points = useSelector((state) => state.points.pointsTotal);
  const [couponToExchange, setCouponToExchange] = useState(null);
  const [showCofirmModal, setShowCofirmModal] = useState(false);
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

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const onExchange = (toExchangeId) => {
    setCouponToExchange(toExchangeId);
    setShowCofirmModal(true);
    // dispatch(exchangeCoupon({ id: toExchangeId }));
  };

  const confirmCouponToExchange = () => {
    notifySuccess("Cupón canjeado");
    dispatch(exchangeCoupon({ id: couponToExchange }));
    setShowCofirmModal(false);
  };

  //opacity-50 cursor-not-allowed

  useEffect(() => {
    dispatch(getExchangeCoupons());
  }, []);

  return (
    <>
      <ToastContainer />
      {showCofirmModal ? (
        <ConfirmModal
          textAcceptButton="Sí"
          textCancelButton="No"
          uppetText="Confirmar"
          bodyText="¿Desea canjear el cupón?"
          confirmCouponToExchange={confirmCouponToExchange}
        ></ConfirmModal>
      ) : null}
      <div className="lg:order-2 h-2/3 relative flex flex-col min-w-0 break-words bg-white xl:w-3/5 mb-6 shadow-xl rounded-lg mt-0 lg:mx-5">
        <div className="mt-4 mb-2 mx-4 text-lg font-bold">Canjear puntos</div>
        <div className="mt-2 py-3 border-t border-gray-300 px-4">
          {exchangeCoupons.length > 0 ? (
            exchangeCoupons.map((exchangeCoupon) => (
              <div
                key={exchangeCoupon._id}
                className="flex justify-center mb-2  pt-3 border-b border-gray-300"
              >
                <div className="py-2 font-bold w-32">{exchangeCoupon.name}</div>
                <ProgressBar
                  final_value={exchangeCoupon.pointsToExchange}
                ></ProgressBar>
                <div className="mx-2">
                  <button
                    className={
                      "btn btn-primary font-bold " +
                      shouldBeDisabledClasses(exchangeCoupon.pointsToExchange)
                    }
                    disabled={shouldBeDisabled(exchangeCoupon.pointsToExchange)}
                    onClick={() => onExchange(exchangeCoupon._id)}
                  >
                    Canjear
                  </button>
                </div>
              </div>
            ))
          ) : (
            <CouponsExchangeLoader></CouponsExchangeLoader>
          )}
        </div>
      </div>
    </>
  );
};

export default PointsExchange;
