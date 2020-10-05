import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Router } from "@reach/router";

import { NavBar } from "./components/NavBar";
import Logo from "./components/Logo";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { fromPromise } from "@apollo/react-hooks";

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
      <NavBar />
    </div>
  );
}
