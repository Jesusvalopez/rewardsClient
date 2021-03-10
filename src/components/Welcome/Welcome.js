import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Bienvenido a recompensas de Sticks</h1>

      <Link to="/auth">
        <button>Login </button>
      </Link>
    </div>
  );
};

export default Welcome;
