import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Coupon from "./Coupon/Coupon";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Navbar/Sidebar";
import { getCoupons, getMyCoupons } from "../../actions/coupons";
import { useDispatch } from "react-redux";
const Coupons = ({ setCurrentId }) => {
  const coupons = useSelector((state) => state.coupons);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCoupons());
    // dispatch(getMyPoints());
  }, [dispatch]);

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="h-screen relative py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row">
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
                {coupons.length > 0
                  ? coupons.map((coupon) => (
                      <Coupon key={coupon._id} coupon={coupon}></Coupon>
                    ))
                  : null}
              </div>
            </div>
            <div className="h-2/3 relative flex flex-col min-w-0 break-words bg-white lg:w-3/5 mb-6 shadow-xl rounded-lg mt-0 m-5">
              <div className=" m-5">
                <div className="col-span-2 text-center text-xl font-bold mb-2">
                  ¿Cómo usar?
                </div>
                <div className="text-center text-sm font-medium text-gray-500 px-20 mb-4">
                  <p className="font-bold text-black">En nuestro local:</p>
                  Indícanos tu correo electrónico durante la compra y el cupón
                  se aplicará automáticamente.
                </div>
                <div className="text-center text-sm font-medium text-gray-500 px-20 mb-4">
                  <p className="font-bold text-black">En nuestra web:</p>
                  Ingresa el código del cupón en el campo 'cupón' al momento de
                  hacer checkout.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Coupons;
