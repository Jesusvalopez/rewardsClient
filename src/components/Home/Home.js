import React, { useEffect, useState } from "react";
import Coupons from "../../components/Coupons/Coupons";
import CouponForm from "../../components/Coupons/Coupon/CouponForm";
import { useDispatch } from "react-redux";
import { getCoupons, getMyCoupons } from "../../actions/coupons";
import { useHistory } from "react-router-dom";
import decode from "jwt-decode";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const history = useHistory();

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  useEffect(() => {
    dispatch(getMyCoupons());
  }, [currentId, dispatch]);

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
    setUser(null);
  };

  return (
    <>
      <h1>Home</h1> <p>Hola {user?.result.name}</p>
      <p>
        <a href="#" onClick={logout}>
          Cerrar sesión
        </a>
      </p>
      <h3>Mis cupones</h3>
      <CouponForm
        currentId={currentId}
        setCurrentId={setCurrentId}
      ></CouponForm>
      <Coupons setCurrentId={setCurrentId}></Coupons>
    </>
  );
};

export default Home;
