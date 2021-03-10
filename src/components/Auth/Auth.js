import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignIn, SignUp, GoogleSignUp } from "../../actions/auth";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = () => {
  const dispatch = useDispatch();
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      dispatch(SignUp(formData, history));
    } else {
      dispatch(SignIn(formData, history));
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    const form = { profile: result, token: token };

    try {
      dispatch(GoogleSignUp(form, history));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log("No se pudo loguear con google");
    console.log(error);
  };

  return (
    <div>
      <h1>{isSignUp ? "Regístrarse" : "Iniciar sesión"}</h1>
      <form action="#" onSubmit={handleSubmit}>
        {isSignUp && (
          <>
            <div>
              <label htmlFor="">Nombre</label>
              <input name="firstName" type="text" onChange={handleChange} />
            </div>
            <div>
              <label htmlFor="">Apellido</label>
              <input name="lastName" type="text" onChange={handleChange} />
            </div>
          </>
        )}

        <div>
          <label htmlFor="">Email</label>
          <input name="email" type="email" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
          />
          <button onClick={handleShowPassword}>Mostrar contraseña</button>
        </div>
        {isSignUp && (
          <>
            <div>
              <label htmlFor="">Confirmar Password</label>
              <input
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
              />
            </div>
          </>
        )}
        <br />
        <div>
          <button type="submit">
            {isSignUp ? "Registrarse" : "Iniciar sesión"}
          </button>
        </div>
        <br />
        {!isSignUp && (
          <div>
            <GoogleLogin
              clientId="104027593023-skbtgi9mot6e86as2alipag0hmfmchm1.apps.googleusercontent.com"
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
              buttonText="Continuar con Google"
            ></GoogleLogin>
          </div>
        )}

        <div>
          <p>
            {isSignUp ? "Ya tienes una cuenta? " : "No tienes una cuenta? "}
            <a href="#" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? "Inicia Sesión" : "Regístrate"}
            </a>
          </p>
        </div>
        {!isSignUp && (
          <div>
            <p>
              {" "}
              <a href="#"> Olvidé mi contraseña</a>
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Auth;
