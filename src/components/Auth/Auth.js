import React, { useState } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { SignIn, SignUp, GoogleSignUp } from "../../actions/auth";
import Logo from "../../images/Logo-Sticks.png";
import { LOGIN_IN } from "../../constants/actionsTypes";
import ReactLoading from "react-loading";
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
  const loginIn = useSelector((state) => state.loginIn);
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
      dispatch({ type: LOGIN_IN, payload: true });
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
    <div className="">
      {loginIn ? (
        <div className="fixed h-full w-full flex flex-col items-center justify-center bg-opacity-50 bg-gray-700">
          <ReactLoading
            type="spin"
            color="rgba(247, 198, 0)"
            height={"10%"}
            width={"80px"}
          />
          <div className="mt-5 text-white">Iniciando sesión...</div>
        </div>
      ) : null}

      <form action="#" onSubmit={handleSubmit}>
        <div className="h-screen flex justify-center items-center flex-col ">
          <div className="w-40 lg:w-56 pb-10" onClick={() => history.push("/")}>
            <img src={Logo} alt="" />
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8  flex flex-col w-11/12 lg:w-2/5 ">
            <p className="text-center text-2xl pb-10">
              {isSignUp ? "Registro" : "Iniciar sesión"}
            </p>
            {isSignUp && (
              <div className="mb-4 grid grid-cols-2 gap-4 mt-10">
                <div>
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="firstName"
                  >
                    Nombre
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="firstName"
                    type="text"
                    placeholder="Nombre"
                    name="firstName"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label
                    className="block text-grey-darker text-sm font-bold mb-2"
                    htmlFor="lastName"
                  >
                    Apellido
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                    id="lastName"
                    type="text"
                    placeholder="Appellido"
                    name="lastName"
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="username"
              >
                Correo electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="email"
                type="email"
                placeholder="ejemplo@gmail.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-grey-darker text-sm font-bold mb-2"
                htmlFor="password"
              >
                Contraseña
              </label>
              <input
                className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker"
                name="password"
                type="password"
                placeholder="******"
                onChange={handleChange}
              />
            </div>
            {isSignUp && (
              <div className="mb-4">
                <label
                  className="block text-grey-darker text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Confirmar Contraseña
                </label>
                <input
                  className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                  name="confirmPassword"
                  type="password"
                  placeholder="******"
                  onChange={handleChange}
                />
              </div>
            )}
            <div className="flex items-center justify-between mt-4">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                {isSignUp ? "Registrarse" : "Iniciar sesión"}
              </button>
              {!isSignUp && (
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                  href="#"
                >
                  Olvidé mi contraseña
                </a>
              )}
            </div>
            <div className="">
              <a
                className="float-right align-baseline font-bold text-sm text-blue hover:text-blue-darker"
                href="#"
                onClick={() => setIsSignUp(!isSignUp)}
              >
                {isSignUp
                  ? "Ya tienes una cuenta?  Inicia Sesión"
                  : "No tienes una cuenta? Regístrate"}
              </a>
            </div>
            <div className="flex items-center justify-between">
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Auth;
