import React from "react";

import { ListOfCategories } from "./components/ListOfCategories";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import Logo from "./components/Logo";

export default function App() {
  // sacamos la id de la url
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get("detail");

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCards categoryId={2} />
    </div>
  );
}
