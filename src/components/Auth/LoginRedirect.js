import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { AUTH } from "../../constants/actionsTypes";
import { useDispatch } from "react-redux";
import Logo from "../../images/Logo-Sticks.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginRedirect = () => {
  const dispatch = useDispatch();
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const token = decodeURIComponent(atob(query.get("token")));

  const history = useHistory();

  const notifyError = (message) => toast.error(message);
  const profile = JSON.parse(token);
  useEffect(() => {
    if (profile.error) {
      notifyError(profile.message);
    } else {
      dispatch({ type: AUTH, payload: token });
      //const profile = JSON.parse(token);
      if (!profile.result.commune) {
        history.push("/wheel-of-fortune");
      } else {
        history.push("/home");
      }
    }
  }, []);

  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <ToastContainer />
      {profile.error ? (
        <>
          <div className="w-40 lg:w-56 pb-10" onClick={() => history.push("/")}>
            <img src={Logo} alt="" />
          </div>
          <button
            onClick={() => history.push("/login")}
            className="text-white font-bold bg-black p-5  hover:opacity-90 rounded-md shadow-lg hover:shadow-xl text-xl"
          >
            Volver al login
          </button>
        </>
      ) : (
        "Iniciando login..."
      )}
    </div>
  );
};

export default LoginRedirect;
