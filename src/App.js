import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "@reach/router";

import { NavBar } from "./components/NavBar";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { Favs } from "./pages/Favs";

const UserLogged = ({ children }) => {
  return children({ isAuth: true });
};

export default function App() {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>

      <UserLogged>
        {({ isAuth }) =>
          isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <NotRegisteredUser path="/favs" />
              <NotRegisteredUser path="/user" />
            </Router>
          )
        }
      </UserLogged>

      <NavBar />
    </div>
  );
}
