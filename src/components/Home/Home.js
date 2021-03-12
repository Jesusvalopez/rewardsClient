import React, { useEffect, useState } from "react";
import Coupons from "../../components/Coupons/Coupons";
import CouponForm from "../../components/Coupons/Coupon/CouponForm";
import { useDispatch } from "react-redux";
import { getCoupons, getMyCoupons } from "../../actions/coupons";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";
import Navbar from "../Navbar/Navbar";
import profilePicture from "../../assets/img/team-2-800x800.jpg";
import { Link } from "react-router-dom";
import Sidebar from "../Navbar/Sidebar";
const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();
  /*
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
*/
  useEffect(() => {
    dispatch(getMyCoupons());
  }, [currentId, dispatch]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  return (
    <>
      <Navbar transparent />
      <main className="profile-page">
        <section className="h-screen py-16 bg-gray-100">
          <div className="container mx-auto px-4 flex">
            <Sidebar></Sidebar>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-0">
              <div className="px-6">
                <div className="flex justify-center pt-5">
                  <div className="w-full lg:w-full bg-gradient-to-r from-sticksyellow to-yellow-500 p-5 rounded-md text-center">
                    <p className="text-white font-bold text-xl">Tus puntos</p>
                    <p className="text-white text-4xl font-bold">2.500</p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="mb-2 text-gray-500">
                    <p className="font-medium px-10">
                      Cada compra que haces en STICKS genera puntos que luego
                      puedes canjear por cupones o descuentos.
                    </p>
                  </div>
                </div>
                <div className="mt-5 py-5 border-t border-gray-300">
                  <div className="flex flex-wrap ">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg font-bold">Historial</p>
                    </div>
                  </div>
                  <div className="flex justify-center px-5 py-2 border-b border-gray-300">
                    <div className="m-2 text-red-500 font-bold w-20">
                      -2.000
                    </div>
                    <div className="flex-1 m-2 font-bold">
                      Canje cupón descuento
                    </div>
                    <div className="m-2">11/03/2021</div>
                  </div>
                  <div className="flex justify-center px-5 py-2 border-b border-gray-300">
                    <div className="m-2 text-green-500 font-bold w-20">
                      +5.000
                    </div>
                    <div className="flex-1 m-2 font-bold">Regalo de STICKS</div>
                    <div className="m-2">11/03/2021</div>
                  </div>
                  <div className="flex justify-center px-5 py-2 border-b border-gray-300">
                    <div className="m-2 text-green-500 font-bold w-20">+20</div>
                    <div className="flex-1 m-2 font-bold">Registro</div>
                    <div className="m-2">11/03/2021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>
            {" "}
            Con los puntos puedes canjear tokens. Ejemplo cada 1000 pesos genera
            10 ptos, serían 100 ptos para canjear un token. Los puntos también
            te permiten canjear cupones. 500 ptos te dejan canjear un cupon.
          </p>
        </section>
      </main>
    </>
  );
};

export default Home;
