import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";

import Navbar from "../Navbar/Navbar";

import Sidebar from "../Navbar/Sidebar";
import { getMyPoints } from "../../actions/points";
import PointsHistory from "../Points/PointsHistory";
import { formatedNumber } from "../../helpers/formats";
import { getMyCouponsCount } from "../../actions/coupons";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();

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

  useEffect(() => {
    dispatch(getMyCouponsCount());
    dispatch(getMyPoints());
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
                    <p className="text-white text-4xl font-bold">
                      {formatedNumber(user.result?.points)}
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4">
                  <div className="mb-2 text-gray-500">
                    <p className="font-medium text-sm px-10">
                      Cada compra que haces en STICKS genera puntos que luego
                      puedes canjear por cupones o descuentos. Por cada $1.000
                      pesos obtienes 10 puntos.
                    </p>
                  </div>
                </div>
                <div className="mt-5 py-5 border-t border-gray-300">
                  <div className="flex flex-wrap ">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg font-bold">Historial</p>
                    </div>
                  </div>

                  <PointsHistory></PointsHistory>
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
