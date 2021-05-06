import React from "react";
import Logo from "./../../images/Logo-Sticks.png";
import { useHistory } from "react-router-dom";
const Conditions = () => {
  const history = useHistory();
  return (
    <div className="container mx-auto mt-40">
      <div className="w-56 pb-10" onClick={() => history.push("/")}>
        <img src={Logo} alt="" />
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-3 pb-8 mt-3  flex flex-col w-full ">
        <p className=" text-xl font-bold pb-2"> Términos y condiciones</p>
        <p>
          {" "}
          <ul className="list-disc pl-10">
            <li>Los cupones son intransferibles</li>
            <li>Los cupones no pueden ser canjeados por terceros</li>
            <li>
              Sólo un cupón por compra para cupones de campañas gratuitas. (No
              aplica para cupones canjeados a través de puntos).
            </li>
            <li>
              El canje de cupones de productos no incluye el costo de envío.
            </li>
            <li>
              Los cupones puede ser anulados por STICKS SPA si se comprueba uso
              indebido de la plataforma.
            </li>
            <li>El canje de cupones está sujeto a stock.</li>
            <li>
              No se permite el uso de cuentas múltiples para canjear múltiples
              cupones.
            </li>
          </ul>
        </p>
        <p>
          <p className=" text-lg font-bold pt-4 pb-2">
            {" "}
            Uso indebido de la plataforma
          </p>
          Las cuentas y sus respectivos cupones pueden ser anulados en cualquier
          momento por STICKS SPA si:
          <ul className="list-disc pl-10">
            <li>
              Se comprueba que la misma persona crea múltiples cuentas falsas
              para obtener Cupones
            </li>
            <li>
              Los cupones fueron obtenidos de manera fraudulenta explotando
              alguna vulnerabilidad de la plataforma.
            </li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Conditions;
