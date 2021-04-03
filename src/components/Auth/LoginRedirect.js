import React, { useEffect } from "react";
import { signInGoogle } from "../../api/index";
import { useHistory } from "react-router-dom";
import { AUTH } from "../../constants/actionsTypes";
import { useDispatch } from "react-redux";

const LoginRedirect = () => {
  const dispatch = useDispatch();
  const search = window.location.search;
  const query = new URLSearchParams(search);
  const token = decodeURIComponent(atob(query.get("token")));

  const history = useHistory();

  useEffect(() => {
    dispatch({ type: AUTH, payload: token });
    const profile = JSON.parse(token);
    if (!profile.result.commune) {
      history.push("/wheel-of-fortune");
    } else {
      history.push("/home");
    }
  }, []);

  return <div></div>;
};

export default LoginRedirect;
