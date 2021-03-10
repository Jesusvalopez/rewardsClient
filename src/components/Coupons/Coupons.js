import React from "react";
import { useSelector } from "react-redux";
import Coupon from "./Coupon/Coupon";

const Coupons = ({ setCurrentId }) => {
  const coupons = useSelector((state) => state.coupons);

  console.log(coupons);

  return (
    <>
      <h1>Mis Cupones</h1>
      {coupons.length
        ? coupons.map((coupon) => (
            <Coupon
              key={coupon._id}
              coupon={coupon}
              setCurrentId={setCurrentId}
            ></Coupon>
          ))
        : null}
    </>
  );
};

export default Coupons;
