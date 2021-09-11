import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo-Sticks.png";
import people from "../../images/rewards.png";
import roulette from "../../images/ruleta web3.png";
import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";

const Welcome = () => {
  return (
    <div className="h-screen pb-14 bg-right bg-cover">
      <div className="w-full container mx-auto p-6">
        <div className="w-full flex items-center justify-center md:justify-between">
          <a
            className="flex items-center text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="#"
          >
            <img src={logo} alt="" className="w-52" />
          </a>
          <div className="hidden flex-col flex-grow text-right md:block ">
            <span className="inline-flex w-28">
              <p className="text-xl align-middle pt-1 pr-2"></p>
              <a href="https://instagram.com/stickschile">
                <img className="ml-2" src={instagram} alt="" />
              </a>
              <a href="https://www.facebook.com/SticksChile">
                <img className="ml-5" src={facebook} alt="" />
              </a>
            </span>
          </div>
        </div>
      </div>

      <div className="container   px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className="flex flex-col w-full lg:w-1/2 justify-center lg:items-start overflow-y-hidden ">
          <h1 className="my-2 text-3xl md:text-7xl text-white font-bold leading-tight text-center lg:text-left slide-in-bottom-h1 align-middle">
            Bienvenido a las STICKS Recompensas
          </h1>

          <p className="text-white leading-normal text-base md:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle">
            Regístrate para compartir y disfrutar con tus amigos estos
            deliciosos premios
          </p>
          <p className="text-black leading-normal text-base md:text-2xl mb-4 text-center md:text-left slide-in-bottom-subtitle">
            ¿Probarás tu suerte?
          </p>

          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center fade-in">
            <Link to="/login">
              <button className="text-white font-bold bg-black p-5  hover:opacity-90 rounded-md shadow-lg hover:shadow-xl text-xl">
                GIRAR LA RULETA
              </button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2 ">
          <img src={roulette} alt="" />
        </div>

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          Copyright 2021 &copy;{" "}
          <a
            className="text-black no-underline hover:no-underline font-bold"
            href="https://sticks.cl"
          >
            {" "}
            STICKS SALTY & SWEET{" "}
          </a>{" "}
          Todos los derechos reservados.{" "}
          <Link to="/politica-privacidad">
            <button className="text-blue-800 underline">
              Política de privacidad
            </button>
          </Link>
          <Link to="/sobre-nosotros">
            <button className="text-blue-800 underline px-2">
              Sobre esta plataforma
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
