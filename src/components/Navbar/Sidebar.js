import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import profilePicture from "../../assets/img/team-2-800x800.jpg";
import { FaCoins } from "react-icons/fa";
import {
  RiCoupon3Fill,
  RiLogoutBoxFill,
  RiStarFill,
  RiEditCircleFill,
} from "react-icons/ri";
import { IconContext } from "react-icons";

const Sidebar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const coupons_count = useSelector((state) => state.couponsCount);
  const tokensCount = useSelector((state) => state.tokensCount);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };

  return (
    <div className="h-2/3 relative flex flex-col min-w-0 break-words bg-white xl:w-1/2 mb-6 shadow-xl rounded-lg mt-0 lg:mx-5">
      <div className="flex ">
        <div className="flex-1">
          <div
            className="w-4/5 text-center text-white text-6xl shadow-md rounded-full h-auto align-middle border-none m-auto mt-6 bg-gradient-to-r from-sticksyellow to-yellow-500"
            style={{
              maxWidth: "150px",
              width: "120px",
              lineHeight: "120px",
              height: "120px",
            }}
          >
            {user?.result.name[0]}
          </div>
        </div>
        <div className="flex-1">
          <div className="h-full py-12">
            <p className="font-bold text-lg">{user?.result.name}</p>
            <p>
              <IconContext.Provider
                value={{
                  style: { display: "inline" },
                  className: "text-2xl text-yellow-500",
                }}
              >
                <FaCoins></FaCoins>
              </IconContext.Provider>{" "}
              Tokens <span className="yellow-badge"> {tokensCount}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <p>
          <IconContext.Provider
            value={{
              style: { display: "inline" },
              className: "text-2xl text-yellow-500",
            }}
          >
            <RiEditCircleFill></RiEditCircleFill>
          </IconContext.Provider>{" "}
          <Link to="/wheel-of-fortune">Ruleta</Link>
        </p>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <p>
          <IconContext.Provider
            value={{
              style: { display: "inline" },
              className: "text-2xl text-yellow-500",
            }}
          >
            <RiStarFill></RiStarFill>
          </IconContext.Provider>{" "}
          <Link to="/home">Puntos</Link>
        </p>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <p>
          <Link to="/my-coupons">
            <IconContext.Provider
              value={{
                style: { display: "inline" },
                className: "text-2xl text-yellow-500",
              }}
            >
              <RiCoupon3Fill></RiCoupon3Fill>
            </IconContext.Provider>{" "}
            Cupones <span className="yellow-badge">{coupons_count}</span>
          </Link>
        </p>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <a href="#" onClick={logout}>
          <IconContext.Provider
            value={{
              style: { display: "inline" },
              className: "text-2xl text-yellow-500",
            }}
          >
            <RiLogoutBoxFill></RiLogoutBoxFill>
          </IconContext.Provider>{" "}
          Cerrar Sesión
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
