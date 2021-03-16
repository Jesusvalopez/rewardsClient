import React from "react";
import { Link } from "react-router-dom";
import human from "../../images/humans.png";
const Welcome = () => {
  return (
    <div className="container mx-auto mt-40">
      <div className="grid grid-cols-2">
        <div>
          <p className="text-9xl text-sticksyellow pr-20 font-bangers">
            Bienvenido a las STICKS recompensas
          </p>
          <p className="text-3xl pt-5 font-roboto">
            Porque comer rico tiene que ser una experiencia completa, descubre
            los descuentos y beneficios por cada compra.
          </p>

          <div className="pt-5">
            <Link to="/login">
              <button className="uppercase shadow-md bg-sticksyellow hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-md my-2">
                Iniciar sesión
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-1">
          <img src={human} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
