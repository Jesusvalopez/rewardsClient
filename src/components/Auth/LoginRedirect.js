import React, { useEffect } from "react";
import { signInGoogle } from "../../api/index";
import { useHistory } from "react-router-dom";

const LoginRedirect = () => {
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const token = decodeURIComponent(atob(query.get("token")));

  const history = useHistory();

  useEffect(() => {
    localStorage.setItem("profile", token);
    //history.push("/home");
    window.location = "/home";
  }, []);

  return <div></div>;
};

export default LoginRedirect;
