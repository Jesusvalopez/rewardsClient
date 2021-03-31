import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo-Sticks.png";
import people from "../../images/rewards.png";

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
        </div>
      </div>

      <div className="container md:pt-24  px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center ">
        <div className="flex flex-col w-full lg:w-1/2 justify-center lg:items-start overflow-y-hidden ">
          <h1 className="my-4 text-3xl md:text-6xl text-white font-bold leading-tight text-center md:text-left slide-in-bottom-h1">
            Bienvenido a las STICKS recompensas
          </h1>
          <p className="text-black leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">
            Porque comer debe ser una experiencia completa, descubre los
            descuentos y beneficios por cada compra.
          </p>

          <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">
            <Link to="/login">
              <button className="text-white font-bold bg-black p-5  hover:opacity-90 rounded-sm shadow-lg hover:shadow-xl text-xl">
                ¡QUIERO DESCUENTOS!
              </button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/2">
          <img src={people} alt="" />
        </div>

        <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
          Copyright 2021 &copy;{" "}
          <a
            className="text-black no-underline hover:no-underline font-bold"
            href="#"
          >
            {" "}
            STICKS SALTY & SWEET{" "}
          </a>{" "}
          Todos los derechos reservados
        </div>
      </div>
    </div>
  );
};

export default Welcome;
