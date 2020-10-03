import React from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import Logo from "./components/Logo";
import { PhotoCardDetails } from "./components/PhotoCardDetails";
import Home from "./pages/Home";
import { Router } from "@reach/router";

export default function App() {
  // sacamos la id de la url
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      {detailId ? (
        <PhotoCardDetails id={detailId} />
      ) : (
        <Router>
          <Home path="/" />
          <Home path="/pet/:id" />
        </Router>
      )}
    </div>
  );
}
