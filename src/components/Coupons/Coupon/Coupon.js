import React from "react";
import moment from "moment";
import { numberToMoney } from "../../../helpers/formats";

const Coupon = ({ coupon }) => {
  return (
    <>
      <div className="flex-1 bg-blue-50 m-2 p-5 rounded-md hover:shadow-lg bg-gradient-to-r from-sticksyellow to-yellow-500">
        <div className="flex">
          <div className="w-1/12 bg-gradient-to-r from-gray-800 to-gray-900 -m-5 rounded-l-md"></div>
          <div className="flex-1 pl-10">
            <div className="text-white font-bold text-3xl">
              {coupon.value ? numberToMoney(coupon.value) : coupon.type}
            </div>
            <div className="font-bold">
              Válido hasta el {moment(coupon.expireDate).format("DD/MM/YYYY")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
