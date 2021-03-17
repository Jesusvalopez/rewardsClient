import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import PrivacyPolicy from "./components/Welcome/PrivacyPolicy";
import Coupons from "./components/Coupons/Coupons";
import { CSSTransition } from "react-transition-group";
import { getMyCouponsCount } from "./actions/coupons";

import decode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const authData = useSelector((state) => state.auth.authData);

  const routes = [
    { path: "/", name: "Welcome", Component: Welcome, is_protected: false },
    { path: "/login", name: "Auth", Component: Auth, is_protected: false },
  ];

  const checkAuth = () => {
    const token = JSON.parse(localStorage.getItem("profile"))?.token;

    if (!token) {
      return false;
    }

    try {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        return false;
      }
    } catch (error) {
      return false;
    }
    return true;
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMyCouponsCount());
  }, [authData]);

  return (
    <BrowserRouter>
      <Switch>
        {routes.map(({ path, Component, is_protected }) => (
          <Route key={path} exact path={path}>
            {({ match }) => (
              <CSSTransition
                in={match != null}
                timeout={300}
                classNames="page"
                unmountOnExit
              >
                {!is_protected || checkAuth() ? (
                  <div className="page">
                    <Component />
                  </div>
                ) : (
                  <Redirect to={{ pathname: "/login" }}></Redirect>
                )}
              </CSSTransition>
            )}
          </Route>
        ))}
        {checkAuth() ? (
          <Route exact path="/my-coupons" component={Coupons}></Route>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )}
        {checkAuth() ? (
          <Route exact path="/home" component={Home}></Route>
        ) : (
          <Redirect to={{ pathname: "/login" }}></Redirect>
        )}
        <Route
          exact
          path="/politica-privacidad"
          component={PrivacyPolicy}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
