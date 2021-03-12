import React from "react";
import { useSelector } from "react-redux";
import Coupon from "./Coupon/Coupon";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";

const Coupons = ({ setCurrentId }) => {
  const coupons = useSelector((state) => state.coupons);

  console.log(coupons);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="h-screen relative py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex">
            <Sidebar />
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-0">
              <div className="flex flex-wrap pt-5">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg font-bold">Mis cupones</p>
                </div>
              </div>
              <div className=" border-t border-gray-300"></div>
              <div className=" border-t border-gray-300"></div>
              <div className="grid md:grid-cols-2 m-5">
                {coupons.map((coupon) => (
                  <Coupon coupon={coupon}></Coupon>
                ))}
              </div>
            </div>
          </div>
          <p> Tipos de cupones: dinero y envíos gratis</p>
        </section>
      </main>
    </>
  );
};

export default Coupons;
