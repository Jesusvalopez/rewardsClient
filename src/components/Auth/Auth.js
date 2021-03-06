import React, { useState, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import {
  SignIn,
  SignUp,
  GoogleSignUp,
  FacebookSignUp,
} from "../../actions/auth";
import Logo from "../../images/Logo-Sticks.png";
import { LOGIN_IN, AUTH_CLEAN_ERRORS } from "../../constants/actionsTypes";
import ReactLoading from "react-loading";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import { IconContext } from "react-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const authError = useSelector((state) => state.auth.authError);
  const history = useHistory();
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  if (JSON.parse(localStorage.getItem("profile"))) {
    history.push("/home");
  }

  useEffect(() => {
    if (authError) {
      notifyError(authError);
    }
    dispatch({ type: AUTH_CLEAN_ERRORS });
  }, [authError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({ type: LOGIN_IN, payload: true });

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

  const notifyError = (message) => toast.error(message);

  return (
    <div className="">
      <ToastContainer />
      {loginIn ? (
        <div className="fixed h-full w-full flex flex-col items-center justify-center bg-opacity-50 bg-gray-700">
          <ReactLoading
            type="spin"
            color="rgba(247, 198, 0)"
            height={"10%"}
            width={"80px"}
          />
          <div className="mt-5 text-white">Iniciando sesi??n...</div>
        </div>
      ) : null}

      <div className="h-screen flex justify-center items-center flex-col ">
        <div className="w-40 lg:w-56 pb-10" onClick={() => history.push("/")}>
          <img src={Logo} alt="" />
        </div>

        <div className="px-8 pt-6 pb-8  flex flex-col w-full lg:w-1/3 ">
          <div className="flex flex-col">
            {!isSignUp && (
              <div className="text-center">
                <p className="text-center text-2xl pb-5 text-black">
                  Est??s a un clic de ganar premios y recompensas
                </p>
                <div className="text-center pb-2">
                  <button
                    onClick={() => {
                      window.location =
                        "https://premios-server.sticks.cl/passport/auth/google";
                      /*window.location =
                        "https://jesusvalopez-jesusvalopez-rewardsserver.zeet.app/passport/auth/google";*/
                      /* window.location =
                        "http://localhost:5000/passport/auth/google";*/
                    }}
                    className="text-gray-500 bg-white py-3 px-3 mt-0 rounded-2xl w-full shadow-md border border-gray-100 hover:opacity-70"
                  >
                    <div className="">
                      <IconContext.Provider
                        value={{
                          style: { display: "inline" },
                          className: "text-2xl",
                        }}
                      >
                        <FcGoogle></FcGoogle>
                      </IconContext.Provider>

                      <p> Continuar con Google</p>
                    </div>
                  </button>
                </div>

                <div>
                  <button
                    onClick={() => {
                      window.location =
                        "https://premios-server.sticks.cl/passport/auth/facebook";
                      /* window.location =
                        "http://localhost:5000/passport/auth/facebook";*/
                    }}
                    className=" text-white bg-blue-600 py-3 px-3 mt-0 rounded-2xl w-full hover:opacity-70"
                  >
                    <div className="">
                      <div>
                        <IconContext.Provider
                          value={{
                            style: { display: "inline" },
                            className: "text-2xl ",
                          }}
                        >
                          <SiFacebook></SiFacebook>
                        </IconContext.Provider>

                        <p> Continuar con Facebook</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-white shadow-md rounded px-8 pt-3 pb-8 mt-3  flex flex-col w-full ">
            {true ? (
              <form action="#" onSubmit={handleSubmit}>
                {!isSignUp && (
                  <div className="flex justify-between items-center">
                    <hr className="w-full" />{" "}
                    <span className="p-2 mb-1">O</span>
                    <hr className="w-full" />
                  </div>
                )}
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
                        placeholder="Apellido"
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
                    Correo electr??nico
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
                    Contrase??a
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
                      Confirmar Contrase??a
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
                <div className="flex items-center justify-between mt-4 flex-col md:flex-row">
                  <button
                    className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    {isSignUp ? "Registrarse" : "Iniciar sesi??n"}
                  </button>
                  {/*!isSignUp && (
                    <a
                      className="my-2 md:my-0 font-bold text-sm text-blue hover:text-blue-darker"
                      href="#"
                    >
                      Olvid?? mi contrase??a
                    </a>
                  )*/}
                </div>
                <div className="text-center ">
                  <a
                    className="my-2 md:my-0 md:float-right font-bold text-sm text-blue hover:text-blue-darker"
                    href="#"
                    onClick={() => setIsSignUp(!isSignUp)}
                  >
                    {isSignUp
                      ? "Ya tienes una cuenta?  Inicia Sesi??n"
                      : "No tienes una cuenta? Reg??strate"}
                  </a>
                </div>
              </form>
            ) : null}
          </div>
          <p className="text-center text-sm pt-2">
            Al ingresar aceptas nuestros{" "}
            <Link to="/terminos-y-condiciones">
              <button className="text-blue-800 underline">
                t??rminos y condiciones{" "}
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
