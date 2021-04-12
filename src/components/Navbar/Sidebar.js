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

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
} from "react-share";

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
      <div className="flex  ">
        <div className="xl:flex-1">
          <div className="w-10 xl:w-20 h-10 xl:h-20 text-center text-white leading-10 xl:leading-20 text-2xl xl:text-6xl shadow-md rounded-full align-middle border-none mx-4 xl:mx-auto mt-3 bg-gradient-to-r from-sticksyellow to-yellow-500">
            {user?.result.name[0]}
          </div>
        </div>
        <div className="flex-1 ">
          <div className="h-full py-4 xl:py-8 ">
            <p className="font-bold text-lg ">{user?.result.name}</p>
            {/*<p>
              <IconContext.Provider
                value={{
                  style: { display: "inline" },
                  className: "text-2xl text-yellow-500",
                }}
              >
                <FaCoins></FaCoins>
              </IconContext.Provider>{" "}
              Tokens <span className="yellow-badge"> {tokensCount}</span>
              </p>*/}
          </div>
        </div>
      </div>
      {/*
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <Link to="/wheel-of-fortune">
          <p>
            <IconContext.Provider
              value={{
                style: { display: "inline" },
                className: "text-2xl text-yellow-500",
              }}
            >
              <RiEditCircleFill></RiEditCircleFill>
            </IconContext.Provider>{" "}
            Ruleta
          </p>{" "}
        </Link>
      </div>
*/}
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <Link to="/home">
          <p>
            <IconContext.Provider
              value={{
                style: { display: "inline" },
                className: "text-2xl text-yellow-500",
              }}
            >
              <RiStarFill></RiStarFill>
            </IconContext.Provider>{" "}
            Puntos
          </p>
        </Link>
      </div>

      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <Link to="/my-coupons">
          <p>
            <IconContext.Provider
              value={{
                style: { display: "inline" },
                className: "text-2xl text-yellow-500",
              }}
            >
              <RiCoupon3Fill></RiCoupon3Fill>
            </IconContext.Provider>{" "}
            Cupones <span className="yellow-badge">{coupons_count}</span>
          </p>
        </Link>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <a href="#" onClick={logout}>
          <p>
            <IconContext.Provider
              value={{
                style: { display: "inline" },
                className: "text-2xl text-yellow-500",
              }}
            >
              <RiLogoutBoxFill></RiLogoutBoxFill>
            </IconContext.Provider>{" "}
            Cerrar Sesión
          </p>
        </a>
      </div>
      <div className="mt-2 py-3 border-t border-gray-300 px-4">
        <p className="text-sm">
          ¡Hey! ¿Nos ayudarías a difundir? Nos vendría bien un poco de apoyo.
          ¡Seguiremos haciendo cosas geniales!
        </p>
        <div className="text-center">
          <span className="px-1">
            <FacebookShareButton
              url="https://premios.sticks.cl"
              quote="¡Me gané un cupón girando la ruleta de Sticks!"
              hashtag="#RuletaSticks"
            >
              <FacebookIcon size={32} round />
            </FacebookShareButton>
          </span>
          <span className="px-1">
            <TwitterShareButton
              url="https://premios.sticks.cl"
              title="¡Me gané un cupón girando la ruleta de Sticks! #RuletaSticks"
            >
              <TwitterIcon size={32} round />
            </TwitterShareButton>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
