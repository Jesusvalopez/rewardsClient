import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Welcome from "./components/Welcome/Welcome";
import { CSSTransition } from "react-transition-group";
import "./styles.css";

const routes = [
  { path: "/", name: "Welcome", Component: Welcome },
  { path: "/auth", name: "Auth", Component: Auth },
  { path: "/home", name: "Home", Component: Home },
];

const App = () => (
  <BrowserRouter>
    {routes.map(({ path, Component }) => (
      <Route key={path} exact path={path}>
        {({ match }) => (
          <CSSTransition
            in={match != null}
            timeout={300}
            classNames="page"
            unmountOnExit
          >
            <div className="page">
              <Component />
            </div>
          </CSSTransition>
        )}
      </Route>
    ))}
  </BrowserRouter>
);

export default App;
