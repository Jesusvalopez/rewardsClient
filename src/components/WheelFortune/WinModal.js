import React, { useState } from "react";
import { useSelector } from "react-redux";
import Coupon from "../Coupons/Coupon/Coupon";
import { Link } from "react-router-dom";
import ReactCanvasConfetti from "react-canvas-confetti";

const canvasStyles = {
  position: "fixed",
  pointerEvents: "none",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 60,
};

const WinModal = () => {
  const [animationInstance, setAnimationInstance] = useState(null);
  const [showConfetti, setSowConfetti] = useState(true);
  const couponPrize = useSelector((state) => state.wheelData.coupon);
  console.log(couponPrize);
  const getInstance = (instance) => {
    if (showConfetti) {
      instance({ particleCount: 350, spread: 142 });
    }
    setSowConfetti(false);
  };

  return (
    <div>
      <ReactCanvasConfetti refConfetti={getInstance} style={canvasStyles} />{" "}
      <div className="m-10 mx-0 md:m-0 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all duration-150">
        <div className="relative w-11/12 md:w-1/4 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-center p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-2xl font-semibold text-center">
                ¡Felicidades!
              </h3>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <Coupon coupon={couponPrize}></Coupon>
            </div>
            {/*footer*/}
            <div className="flex justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
              <Link
                to="/my-coupons"
                className="btn btn-primary font-bold  transition-all duration-150 w-full md:w-2/4"
              >
                <p className="text-center">Ver mi cupón</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};

export default WinModal;
